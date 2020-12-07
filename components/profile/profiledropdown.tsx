import React, { FC, useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Initial, Movie } from "../../redux/types";
import colors from "../../style/colors";
import fonts from "../../style/fonts";
import Animated from "react-native-reanimated";
import { useSelector } from "react-redux";

const SPACING = 30;
const { width } = Dimensions.get("window");

interface Props {
  type: string;
  title: string;
}

const ProfileDropdown: FC<Props> = ({ type, title }) => {
  const [hide, setHide] = useState(false);
  const anim = useRef(new Animated.Value(0)).current;
  const list: Movie[] = useSelector((state: Initial) => state.movies[type]);

  const toggleHide = () => {
    animateDropDown();
  };

  const animateDropDown = () => {
    Animated.spring(anim, {
      toValue: hide ? 1 : 0,
      damping: 100,
      mass: 5,
      stiffness: 150,
      overshootClamping: false,
      restSpeedThreshold: 0.001,
      restDisplacementThreshold: 0.001,
      //https://stackoverflow.com/questions/59776912/how-do-i-start-a-spring-animation-with-react-native-reanimated-in-a-declarativ
    }).start(() => setHide(!hide));
  };

  const height = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30 * list.length + SPACING / 6],
  });

  const widthAnim = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width - width * 0.16],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleHide} style={styles.dropTitle}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons
          name={hide ? "md-arrow-dropdown" : "ios-remove"}
          size={24}
          color={colors.pink}
        />
        <Animated.View style={[styles.border, { width: widthAnim }]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleHide}>
        <Animated.View style={[styles.listWrapper, { height }]}>
          {list.map((item, index) => {
            return (
              <View key={index}>
                <Text style={styles.itemText} numberOfLines={1}>
                  <Text style={{ color: colors.white }}>
                    {index + 1 + ". "}
                  </Text>
                  {item.Title}
                </Text>
              </View>
            );
          })}
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileDropdown;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: SPACING,
  },
  dropTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 4,
    elevation: 5,
    zIndex: 5,
    borderWidth: 1,
    padding: SPACING / 6,
  },
  title: {
    fontSize: fonts.text20,
    fontFamily: "RalewaySemiBold",
    color: colors.gray,
  },
  itemText: {
    fontSize: 16,
    fontFamily: "RalewayRegular",
    paddingVertical: SPACING / 6,
    color: colors.white,
  },
  listWrapper: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingVertical: SPACING / 6,
    paddingHorizontal: SPACING / 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  border: {
    position: "absolute",
    width: "100%",
    height: 4,
    bottom: 0,
    backgroundColor: colors.pink,
  },
});
