import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import CouchSVG from "./couchsvg";

const { width, height } = Dimensions.get("window");

const description =
  "Find your next favorite super duper amazing movie among over 1000 iMDB 7+ movies.";

export default function Onboard0() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>
      <CouchSVG />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 60,
  },
  description: {
    fontSize: 20,
    fontFamily: "RalewaySemiBold",
    color: "#e5e5e5",
  },
});
