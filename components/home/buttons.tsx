import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../style/colors";
import { Feather } from "@expo/vector-icons";

interface Props {
  handler: (id: string) => void;
  id: string;
  text: string;
}

const Buttons: FC<Props> = ({ handler, id, text }) => {
  return (
    <TouchableOpacity onPress={() => handler(id)} style={styles.button}>
      <Feather name={text} size={24} color={colors.pink} />
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    alignItems: "center",
  },
});
