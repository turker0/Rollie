import React, { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Initial, Movie } from "../../redux/types";
import colors from "../../style/colors";
import fonts from "../../style/fonts";
import { useSelector } from "react-redux";

const SPACING = 30;

interface Props {
  type: string;
  title: string;
}

const ProfileDropdown: FC<Props> = ({ type, title }) => {
  const [hide, setHide] = useState(false);
  const list: Movie[] = useSelector((state: Initial) => state.movies[type]);

  const toggleHide = () => {
    setHide(!hide);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleHide}>
        <View style={styles.dropTitle}>
          <Text style={styles.title}>
            {list.length + "-  "}
            {title}
          </Text>
          <Ionicons
            name={hide ? "md-arrow-dropdown" : "ios-remove"}
            size={24}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>
      {hide && (
        <TouchableOpacity onPress={toggleHide}>
          <View style={styles.listWrapper}>
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
          </View>
        </TouchableOpacity>
      )}
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
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderWidth: 1,
    padding: SPACING / 6,
    backgroundColor: colors.pink,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
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
    color: colors.white,
  },
  listWrapper: {
    backgroundColor: colors.black,
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
