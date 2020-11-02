import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import AvatarsList from "./avatarslist";
import Input from "./input";

const description = "Pick an avatar.";
const { width, height } = Dimensions.get("window");

export default function Onboard1() {
  const [imageIndex, setImageIndex] = useState(null);
  const [name, setName] = useState("");
  const [lorem, setLorem] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>
      <AvatarsList index={imageIndex} setIndex={setImageIndex} />
      <Input
        placeholder={"Your name"}
        text={name}
        setText={setName}
        maxLength={16}
      />
      <Input
        placeholder={"Say something"}
        text={lorem}
        setText={setLorem}
        maxLength={24}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 60,
  },
  description: {
    fontSize: 20,
    fontFamily: "RalewaySemiBold",
    color: "#e5e5e5",
  },
  avatarsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
