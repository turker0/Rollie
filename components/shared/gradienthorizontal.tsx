import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../style/colors";

const GradientHorizontal = () => {
  return (
    <LinearGradient
      colors={[colors.purple, colors.pink]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    />
  );
};

export default GradientHorizontal;

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 60,
    zIndex: -1,
    elevation: -1,
  },
});
