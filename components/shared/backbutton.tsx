import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../style/colors";
import fonts from "../../style/fonts";
import GradientColored from "./gradientcolored";

interface Props {
  title: string;
}

const BackButton: FC<Props> = ({ title }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.iconBG}>
      <GradientColored />
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name="ios-arrow-round-back"
          size={32}
          color={colors.white}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  iconBG: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    overflow: "hidden",
  },
  icon: {
    backgroundColor: colors.dark,
    width: 32,
    height: 32,
    borderRadius: 16,
    textAlign: "center",
  },
});
