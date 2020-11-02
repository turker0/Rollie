import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Back({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="md-arrow-round-back" size={28} color="#EDF1F5" />
      </TouchableOpacity>
      <Text style={styles.title}>ROLLIE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    color: "#EDF1F5",
    fontFamily: "RalewayBlack",
    letterSpacing: 0.5,
    marginLeft: 25,
  },
});
