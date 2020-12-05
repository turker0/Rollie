import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../style/colors";

const GradientColored = () => {
  return (
    <LinearGradient
      colors={[colors.pink, colors.purple]}
      style={[styles.gradient, StyleSheet.absoluteFillObject]}
    />
  );
};

export default GradientColored;

const styles = StyleSheet.create({
  gradient: {
    zIndex: -1,
    elevation: -1,
    borderRadius: 4,
  },
});
