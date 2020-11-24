import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SPACING = 30;

export default function Roll({ roll }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No rolled movie.</Text>
      <TouchableOpacity style={styles.button} onPress={roll}>
        <MaterialCommunityIcons name="popcorn" size={18} color="#665DF5" />
        <Text style={styles.text}>Roll</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: SPACING,
  },
  title: {
    fontSize: 16,
    fontFamily: "RalewaySemiBold",
    color: "#c2c2c2",
    marginBottom: SPACING / 2,
    borderLeftWidth: 4,
    borderRadius: 2,
    borderColor: "#665DF5",
    paddingLeft: SPACING / 6 + 5,
  },
  button: {
    height: SPACING * 1.2,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: SPACING / 2,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#665DF5",
    backgroundColor: "#000",
  },
  text: {
    fontSize: 18,
    fontFamily: "RalewayBold",
    color: "#665DF5",
    marginLeft: SPACING / 4,
  },
});
