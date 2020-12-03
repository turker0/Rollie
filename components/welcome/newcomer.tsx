import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StatusBar, Text, StyleSheet, Dimensions, View } from "react-native";
import Profile from "./profile";
import Top10Selector from "./top10selector";

const SPACING = 30;
const { width, height } = Dimensions.get("window");

const Newcomer = () => {
  const [isProfileVisible, setIsProfileVisible] = useState<boolean>(false);
  const toggleIsProfileVisible = () => setIsProfileVisible(!isProfileVisible);
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
      <StatusBar barStyle="default" />
      <Text style={styles.title}>Rollie</Text>

      {!isProfileVisible ? (
        <Profile toggleIsProfileVisible={toggleIsProfileVisible} />
      ) : (
        <Top10Selector />
      )}
    </View>
  );
};

export default Newcomer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    height: "20%",
    paddingLeft: SPACING,
    textAlignVertical: "bottom",
    fontSize: 32,
    color: "#fff",
    fontFamily: "RalewayBlack",
    letterSpacing: 1,
  },
});
