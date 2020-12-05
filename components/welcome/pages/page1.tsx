import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import colors from "../../../style/colors";
import fonts from "../../../style/fonts";
import CouchSVG from "./couchsvg";

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
    </View>
  );
};

export default Page1;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width,
    paddingHorizontal: "8%",
  },
  description: {
    fontSize: fonts.text24,
    color: colors.pink,
    fontFamily: "RalewayMedium",
  },
  highlighted: {
    fontFamily: "RalewayBold",
  },
});
