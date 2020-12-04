import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../style/colors";
import fonts from "../../style/fonts";

const SPACING = 30;

interface Props {
  text: string | undefined;
  title: string;
}

const MoviePageText: FC<Props> = ({ text, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
export default MoviePageText;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING / 3,
    paddingHorizontal: "4%",
    marginBottom: SPACING,
    backgroundColor: "rgba(0,0,0,.85)",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    zIndex: 7,
    elevation: 7,
  },
  text: {
    fontSize: fonts.text16,
    fontFamily: "RalewayRegular",
    color: colors.white,
    lineHeight: SPACING,
    paddingTop: SPACING / 4,
  },
  title: {
    fontSize: fonts.text20,
    color: colors.pink,
    fontFamily: "RalewayBold",
    paddingLeft: SPACING / 2,
    paddingRight: SPACING / 4,
    borderLeftWidth: 5,
    borderRadius: 2,
    borderColor: colors.pink,
    alignSelf: "flex-start",
  },
});
