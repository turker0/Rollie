import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../style/colors";
import { Feather } from "@expo/vector-icons";
import fonts from "../../style/fonts";

interface Props {
  handler: (id: string) => void;
  id: string;
  name: string;
  text: string;
}

const Buttons: FC<Props> = ({ handler, id, name, text }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handler(id)}>
        <View style={styles.button}>
          <Feather
            name={name}
            size={18}
            color={colors.pink}
            style={{ marginTop: 4 }}
          />
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    height: "95%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 4,
    paddingLeft: 5,
  },

  text: {
    marginLeft: 5,
    fontSize: fonts.text16,
    fontFamily: "RalewayMedium",
    color: colors.pink,
    textTransform: "capitalize",
  },
});
