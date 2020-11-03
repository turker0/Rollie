import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");
const SPACING = 30;

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Text style={styles.title}>Rollie</Text>
      {
        // <HomeStats value={419} text={"movies"} />
      }

      <Text style={styles.header}>Your next movie</Text>
      <Text style={styles.header}>Last watched</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  title: {
    paddingTop: SPACING * 2,
    paddingLeft: SPACING,
    fontSize: 32,
    color: "#fff",
    fontFamily: "RalewayBlack",
    letterSpacing: 1,
  },
  header: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "RalewaySemiBold",
    letterSpacing: 1,
  },
});
