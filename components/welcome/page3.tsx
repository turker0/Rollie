import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Animated, { Easing } from "react-native-reanimated";
import { useSelector } from "react-redux";
import { Initial } from "../../redux/types";
import Input from "./input";

const SPACING = 30;
const { width } = Dimensions.get("window");
interface Props {
  toggleIsProfileVisible: () => void;
  input1: RefObject<TextInput>;
}

const Page3: FC<Props> = ({ toggleIsProfileVisible, input1 }) => {
  const input2: any = useRef<TextInput>(null);
  const input3: any = useRef<TextInput>(null);
  const user = useSelector((state: Initial) => state.user);
  const [error, setError] = useState<boolean>(true);

  const opacity = useRef(new Animated.Value(0)).current;

  const input2Focus = () => {
    if (input2.current !== null) {
      input2.current.focus();
    }
  };

  const input3Focus = () => {
    if (input3.current !== null) {
      input3.current.focus();
    }
  };

  useEffect(() => {
    if (
      user.username.length >= 3 &&
      user.mail.length >= 3 &&
      user.password.length >= 3
    ) {
      animateButton(1);
    } else {
      animateButton(0);
    }
  }, [user]);

  const animateButton = (toValue: number) => {
    Animated.timing(opacity, {
      toValue,
      duration: 222,
      easing: Easing.linear,
    }).start(() => {
      setError(toValue === 1 ? false : true);
    });
  };

  return (
    <View style={styles.page}>
      <Text style={styles.description}>Create a profile</Text>
      <Input
        placeholder="E-mail"
        id="mail"
        ref={input1}
        nextHandler={input2Focus}
        maxLength={32}
      />
      <Input
        placeholder="Username"
        id="username"
        ref={input2}
        nextHandler={input3Focus}
        maxLength={16}
      />
      <Input
        placeholder="Password"
        id="password"
        isPassword
        ref={input3}
        maxLength={20}
      />
      <TouchableOpacity
        onPress={() => (!error ? toggleIsProfileVisible() : null)}
      >
        <Animated.Text style={[styles.buttonTet, { opacity }]}>
          Create
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page3;

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
