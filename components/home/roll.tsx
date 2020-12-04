import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import fonts from "../../style/fonts";
import colors from "../../style/colors";

const SPACING = 30;

interface Props {
  roll: () => void;
}

const Roll: FC<Props> = ({ roll }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No rolled movie.</Text>
      <TouchableOpacity style={styles.button} onPress={roll}>
        <MaterialCommunityIcons name="popcorn" size={18} color={colors.pink} />
        <Text style={styles.text}>Roll</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: SPACING,
  },
  title: {
    fontSize: fonts.text16,
    fontFamily: "RalewaySemiBold",
    color: colors.gray,
    marginBottom: SPACING / 2,
    borderLeftWidth: 4,
    borderRadius: 2,
    borderColor: colors.pink,
    paddingLeft: SPACING / 6 + 5,
  },
  button: {
    height: SPACING * 1.2,
    marginTop: SPACING * 0.6,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: SPACING / 2,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.pink,
    backgroundColor: colors.dark,
  },
  text: {
    fontSize: fonts.text20,
    fontFamily: "RalewayBold",
    color: colors.pink,
    marginLeft: SPACING / 4,
  },
});

export default Roll;
