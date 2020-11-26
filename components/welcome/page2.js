import React, { useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Animated, { Easing } from "react-native-reanimated";
import { useSelector } from "react-redux";
import Input from "./input";

const SPACING = 30;
const { width } = Dimensions.get("window");

const Page2 = ({ toggleProfile, input1 }) => {
  const input2 = useRef(TextInput);
  const user = useSelector((state) => state.user);
  const [error, setError] = useState(true);

  const opacity = useRef(new Animated.Value(0)).current;

  const inputNextHandler = () => {
    input2.current?.focus();
  };

  useEffect(() => {
    if (user.username.length >= 3 && user.detail.length >= 3) {
      animateButton(1);
    } else {
      animateButton(0);
    }
  }, [user]);

  const animateButton = (toValue) => {
    Animated.timing(opacity, {
      toValue,
      duration: 222,
      easing: Easing.linear,
    }).start(() => {
      if (toValue === 1) {
        setError(false);
      } else {
        setError(true);
      }
    });
  };

  return (
    <View style={styles.page}>
      <Text style={styles.description}>Create a profile</Text>
      <Input
        placeholder="Your name"
        id="username"
        ref={input1}
        nextHanler={inputNextHandler}
        maxLength={12}
      />
      <Input placeholder="Detail" id="detail" ref={input2} maxLength={20} />
      <TouchableOpacity onPress={() => (!error ? toggleProfile() : null)}>
        <Animated.Text style={[styles.buttonTet, { opacity }]}>
          Create
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({
  page: {
    width,
    paddingHorizontal: SPACING,
    paddingVertical: SPACING / 2,
  },
  description: {
    fontSize: 20,
    fontFamily: "RalewaySemiBold",
    color: "#f5f5f5",
  },
  buttonTet: {
    paddingVertical: SPACING / 6,
    paddingHorizontal: SPACING / 2,
    marginTop: SPACING,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#665DF5",
    fontSize: 18,
    fontFamily: "RalewayBold",
    color: "#665DF5",
    alignSelf: "flex-start",
  },
});
