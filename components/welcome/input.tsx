import React, { Ref, RefObject, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Animated, { Easing } from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux/actions";

const SPACING = 30;

interface Props {
  placeholder: string;
  id: string;
  maxLength: number;
  ref: RefObject<TextInput>;
  nextHandler?: () => void;
  isPassword?: boolean;
}

const Input = React.forwardRef<TextInput, Props>(
  (
    { placeholder, id, maxLength, nextHandler, isPassword },
    ref: Ref<TextInput>
  ) => {
    const dispatch = useDispatch();
    const opacity = useRef(new Animated.Value(0)).current;

    const onChangeHandler = (text: string) => {
      if (text.length < 3) {
        startTextAnimation();
      } else {
        endTextAnimation();
      }
      dispatch(actionCreators.editUserByKey(text, id));
    };

    const endTextAnimation = () => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 222,
        easing: Easing.linear,
      }).start();
    };

    const startTextAnimation = () => {
      Animated.timing(opacity, {
        toValue: 1,
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
          onFocus={startTextAnimation}
          onSubmitEditing={nextHandler}
          autoCapitalize="none"
          secureTextEntry={isPassword}
          blurOnSubmit={id === "username" ? false : true}
          keyboardType={id === "mail" ? "email-address" : "default"}
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
