import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import AnimateNumber from "react-native-animate-number";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const { width, height } = Dimensions.get("window");

export default function HomeStats({ value, text }) {
  return (
    <View>
      <AnimatedCircularProgress
        size={width / 3.3}
        width={10}
        fill={value / 10}
        tintColor="#fff"
        backgroundColor="#3d5875"
      >
        {() => (
          <View style={styles.container}>
            <AnimateNumber
              value={value}
              timing="linear"
              interval={10}
              theme={styles.text}
              formatter={(val) => {
                return parseFloat(val).toFixed();
              }}
            />
            <Text style={styles.detail}>{text}</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width / 3.3 - 30,
    height: width / 3.3 - 30,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontFamily: "RalewayBold",
  },
  detail: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "RalewaySemiBold",
  },
});
