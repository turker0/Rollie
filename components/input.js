import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TEXT_HEIGHT = 50;

export default function Input({ placeholder, text, setText, maxLength }) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#8F8D8D"
      maxLength={maxLength}
      placeholder={placeholder}
      onChangeText={(text) => setText(text)}
      defaultValue={text}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    fontFamily: "RalewayBold",
    fontSize: 18,
    height: 40,
    color: "#e5e5e5",
    letterSpacing: 1,
  },
});
