import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import SWIPESVG from "./swipesvg";

const SPACING = 30;
const { width } = Dimensions.get("window");

const Page2 = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.description}>
        Swipe left for movies you watched and right for unwatched.
      </Text>
      <SWIPESVG />
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({
  page: {
    width,
    //height: "100%",
    paddingHorizontal: SPACING,
    paddingVertical: SPACING / 2,
  },
  description: {
    fontSize: 20,
    fontFamily: "RalewaySemiBold",
    color: "#f5f5f5",
  },
  highlighted: {
    color: "#665DF5",
    fontFamily: "RalewayBold",
  },
});
