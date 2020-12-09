import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../../style/colors";
import fonts from "../../style/fonts";

interface Props {
  icon: string;
  text: string | undefined;
  margin?: boolean;
}

const MovieStatText: FC<Props> = ({ icon, text, margin }) => {
  return (
    <View style={[styles.container, margin && { marginRight: 20 }]}>
      <FontAwesome
        name={icon}
        size={20}
        color={colors.pink}
        style={{
          marginTop: 5,
          marginRight: 5,
        }}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default MovieStatText;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    fontSize: fonts.text20,
    fontFamily: "RalewaySemiBold",
    color: colors.white,
    lineHeight: 30 * 1,
  },
});
