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
    borderTopWidth: 1,
    borderColor: "#fafafa",
    marginBottom: SPACING,
  },
  text: {
    fontSize: 16,
    fontFamily: "RalewaySemiBold",
    color: "#fafafa",
    lineHeight: SPACING,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "RalewayBold",
    position: "absolute",
    top: -SPACING / 2,
    alignSelf: "center",
    zIndex: 2,
    elevation: 2,
    backgroundColor: "#000",
  },
});
