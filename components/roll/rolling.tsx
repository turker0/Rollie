import React, { FC } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../style/colors";
import fonts from "../../style/fonts";
import GradientBG from "../shared/gradientbg";
import RollSVG from "./rollsvg";

const SPACING = 30;

interface Props {
  roll: () => void;
  svganim: Animated.Value;
}

const Rolling: FC<Props> = ({ roll, svganim }) => {
  const scale = svganim.interpolate({
    inputRange: [0, 0.2, 4],
    outputRange: [1, 0.4, 12],
  });

  const opacity = svganim.interpolate({
    inputRange: [0, 3, 4],
    outputRange: [1, 1, 0],
  });

  return (
    <View style={styles.container}>
      <GradientBG />
      <Animated.View style={{ opacity, transform: [{ scale }] }}>
        <TouchableOpacity onPress={roll}>
          <RollSVG />
          <Text style={styles.title}>
            <Text style={styles.hightlighted}>ROLL</Text> A{" "}
            <Text style={styles.hightlighted2}>MOVIE</Text>
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Rolling;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: fonts.text32,
    color: colors.white,
    fontFamily: "RalewayBlack",
    marginBottom: SPACING / 2,
    letterSpacing: 0.5,
    paddingTop: SPACING,
  },
  hightlighted: {
    color: colors.purple,
  },
  hightlighted2: {
    color: colors.red,
  },
});
