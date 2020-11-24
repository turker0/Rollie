import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux/actions";

const SPACING = 30;

const Input = React.forwardRef(
  ({ placeholder, id, maxLength, nextHanler }, ref) => {
    const [color, setColor] = useState("#000");
    const dispatch = useDispatch();

    const onChangeHandler = (text) => {
      dispatch(actionCreators.setUser(text, id));
    };

    const onFocus = () => {
      setColor("#665DF5");
    };

    return (
      <View style={styles.container}>
        <Text style={[styles.error, { color: color }]}>
          Must be between 3-{maxLength} characters.
        </Text>
        <TextInput
          ref={ref}
          placeholder={placeholder}
          onChangeText={(text) => onChangeHandler(text)}
          maxLength={maxLength}
          onFocus={onFocus}
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
    fontFamily: "RalewayLight",
  },
});

export default Input;
