import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../style/colors";

const GradientBG = () => {
  return (
    <LinearGradient
      colors={[colors.black, colors.dark]}
      style={styles.container}
    />
  );
};

export default GradientBG;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    zIndex: -1,
    elevation: -1,
    height: "100%",
  },
});