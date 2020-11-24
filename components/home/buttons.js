import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SPACING = 30;

export default function Buttons({ handler, id, text }) {
  return (
    <TouchableOpacity onPress={() => handler(id)} style={styles.button}>
      <Text style={styles.buttonTet}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingHorizontal: SPACING / 2,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#665DF5",
  },
  buttonTet: {
    fontSize: 18,
    fontFamily: "RalewayBold",
    color: "#665DF5",
  },
});
