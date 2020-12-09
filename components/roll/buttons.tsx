import React, { FC } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import colors from "../../style/colors";
import fonts from "../../style/fonts";

const SPACING = 30;
const { width } = Dimensions.get("window");

interface Props {
  handler: (id: string) => void;
  id: string;
  name: string;
  text: string;
  border: number;
}

const Buttons: FC<Props> = ({ handler, id, name, border, text }) => {
  return (
    <TouchableOpacity onPress={() => handler(id)}>
      <View
        style={[
          styles.button,
          border !== 0
            ? {
                borderLeftWidth: 1,
                borderLeftColor: colors.gray,
              }
            : null,
        ]}
      >
        <Feather name={name} size={24} color={colors.pink} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Buttons;

const styles = StyleSheet.create({
  button: {
    width: width * 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
  border: {
    textAlign: "center",
  },
  text: {
    width: "100%",
    fontSize: fonts.text12,
    fontFamily: "RalewayMedium",
    color: colors.pink,
    textAlign: "center",
  },
});
