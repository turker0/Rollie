import React, { FC, useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Movie } from "../../redux/types";
import Animated, { Easing } from "react-native-reanimated";
import colors from "../../style/colors";
import fonts from "../../style/fonts";

const SPACING = 30;
const { width } = Dimensions.get("window");

interface Props {
  title: string;
  list: Movie[];
  color: string;
}

const ProfileDropdown: FC<Props> = ({ title, list, color }) => {
  const [hide, setHide] = useState(false);
  const anim = useRef(new Animated.Value(0)).current;

  const toggleHide = () => {
    animateDropDown();
  };

  const animateDropDown = () => {
    Animated.timing(anim, {
      toValue: hide !== false ? 0 : 1,
      duration: 500,
      easing: Easing.linear,
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
          color={colors.purple}
        />
        <Animated.View style={[styles.border, { width: widthAnim }]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleHide}>
        <Animated.View style={[styles.listWrapper, { height }]}>
          {list.map((item, index) => {
            return (
              <View key={index}>
                <Text style={[styles.itemText, { color }]} numberOfLines={1}>
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
    color: colors.white,
  },
  itemText: {
    fontSize: 16,
    fontFamily: "RalewayRegular",
    paddingVertical: SPACING / 6,
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
    backgroundColor: colors.purple,
  },
});
