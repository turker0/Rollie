import React, { FC } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import colors from "../../style/colors";

const SPACING = 30;
const { width } = Dimensions.get("window");

interface Props {
  handler: (id: string) => void;
  id: string;
  text: string;
  border: number;
}

const Buttons: FC<Props> = ({ handler, id, text, border }) => {
  return (
    <TouchableOpacity onPress={() => handler(id)} style={styles.button}>
      <Feather
        name={text}
        size={24}
        color={colors.pink}
        style={[
          styles.border,
          border === 0 ? { borderLeftWidth: 0 } : { borderLeftWidth: 1 },
        ]}
      />
    </TouchableOpacity>
  );
};
export default Buttons;

const styles = StyleSheet.create({
  button: {
    height: SPACING * 1.2,
    width: width * 0.25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  border: {
    flex: 1,
    textAlign: "center",
    borderColor: colors.gray,
  },
});
