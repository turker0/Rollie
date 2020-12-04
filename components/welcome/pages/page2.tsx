import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import colors from "../../../style/colors";
import fonts from "../../../style/fonts";
import SWIPESVG from "./swipesvg";

const SPACING = 30;
const { width } = Dimensions.get("window");

const Page2 = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.description}>
        Swipe left for movies you{" "}
        <Text style={styles.highlighted}>watched</Text> and right for{" "}
        <Text style={styles.highlighted}>unwatched</Text>.
      </Text>
      <SWIPESVG />
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width,
    paddingHorizontal: "8%",
  },
  description: {
    fontSize: fonts.text20,
    color: colors.white,
    fontFamily: "RalewayMedium",
  },
  highlighted: {
    color: "#665DF5",
    fontFamily: "RalewayBold",
  },
});
