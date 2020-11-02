import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";

export default function RollStats({ icon, text, opacity1, opacity2 }) {
  return (
    <Animated.View style={[styles.textWrapper, { opacity: opacity1 }]}>
      {icon}
      <Animated.Text
        style={[styles.text, { opacity: opacity2 }]}
        numberOfLines={4}
      >
        {text}
      </Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2.5,
  },
  text: {
    flex: 1,
    marginLeft: 5,
    fontSize: 14,
    color: "#EDF1F5",
    fontFamily: "RalewayRegular",
  },
});
