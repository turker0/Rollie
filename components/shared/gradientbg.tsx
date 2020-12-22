import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../style/colors";

const GradientBG = () => {
  return (
    <LinearGradient
      colors={[colors.dark, "#050A24", colors.dark]}
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
    bottom: 0,
    zIndex: -1,
    elevation: -1,
  },
});
