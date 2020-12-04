import React, { FC } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface Props {
  style: ViewStyle;
  children: JSX.Element[] | JSX.Element;
}

const TextWrapper: FC<Props> = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default TextWrapper;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
    paddingVertical: "2.5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    //https://ethercreative.github.io/react-native-shadow-generator/
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
