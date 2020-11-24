import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SPACING = 30;

export default function MoviePageText({ text, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING / 3,
    marginBottom: SPACING,
  },
  text: {
    fontSize: 16,
    fontFamily: "RalewayRegular",
    color: "#fafafa",
    lineHeight: SPACING,
  },
  title: {
    fontSize: 18,
    color: "#665DF5",
    fontFamily: "RalewayBold",
    paddingBottom: SPACING / 10,
    paddingRight: SPACING / 4,
    borderBottomWidth: 2,
    borderRadius: 2,
    borderColor: "#665DF5",
    alignSelf: "flex-start",
  },
});
