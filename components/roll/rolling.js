import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import RollSVG from "./rollsvg";

const SPACING = 30;

const Rolling = ({ roll, svganim }) => {
  const rotate = svganim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "720deg"],
  });
  const scale = svganim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 1],
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#000", "#13112D"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          zIndex: -1,
          elevation: -1,
          height: "100%",
        }}
      />
      <TouchableOpacity onPress={roll}>
        <Animated.View
          style={{
            transform: [{ rotate, scale }],
          }}
        >
          <RollSVG />
        </Animated.View>

        <Text style={styles.title}>
          <Text style={styles.hightlighted}>ROLL</Text> A{" "}
          <Text style={styles.hightlighted2}>MOVIE</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Rolling;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontFamily: "RalewayBlack",
    marginBottom: SPACING / 2,
    letterSpacing: 0.5,
    paddingTop: SPACING,
  },
  hightlighted: {
    color: "#665DF5",
  },
  hightlighted2: {
    color: "#e50914",
  },
});
