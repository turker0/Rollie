import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Animated, { Easing } from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux/actions";

const SPACING = 30;

const Input = React.forwardRef(
  ({ placeholder, id, maxLength, nextHanler }, ref) => {
    const dispatch = useDispatch();
    const opacity = useRef(new Animated.Value(0)).current;

    const onChangeHandler = (text) => {
      if (text.length < 3) {
        animateText(1);
      } else {
        animateText(0);
      }
      dispatch(actionCreators.setUser(text, id));
    };

    const animateText = (toValue) => {
      Animated.timing(opacity, {
        toValue,
        duration: 222,
        easing: Easing.linear,
      }).start();
    };

    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.error, { opacity }]}>
          Must be between 3-{maxLength} characters.
        </Animated.Text>
        <TextInput
          ref={ref}
          placeholder={placeholder}
          onChangeText={(text) => onChangeHandler(text)}
          maxLength={maxLength}
          onFocus={() => {
            animateText(1);
          }}
          onSubmitEditing={nextHanler}
          blurOnSubmit={id === "username" ? false : true}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#8F8D8D"
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING / 6,
  },
  input: {
    fontFamily: "RalewaySemiBold",
    paddingVertical: SPACING / 6,
    fontSize: 20,
    color: "#CDCBCB",
    letterSpacing: 1,
    borderBottomWidth: 2,
    borderRadius: 2,
    borderColor: "#665DF5",
  },
  error: {
    fontSize: 12,
    color: "#665DF5",
    fontFamily: "RalewayLight",
  },
});

export default Input;
