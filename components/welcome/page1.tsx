import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import CouchSVG from "./couchsvg";

const SPACING = 30;
const { width } = Dimensions.get("window");

const Page1 = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.description}>
        Find your <Text style={styles.highlighted}>next</Text> favorite super
        duper amazing movie among over{" "}
        <Text style={styles.highlighted}>1000 iMDB 7+</Text> movies.
      </Text>
      <CouchSVG />
      <Text style={styles.swipeText}>
        Swipe left and <Text style={styles.highlighted}>create a profile</Text>.
      </Text>
    </View>
  );
};

export default Page1;

const styles = StyleSheet.create({
  page: {
    width,
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
  swipeText: {
    fontSize: 18,
    fontFamily: "RalewaySemiBold",
    color: "#fff",
  },
});
