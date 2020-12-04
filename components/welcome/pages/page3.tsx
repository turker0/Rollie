import { useNavigation } from "@react-navigation/native";
import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Animated, { Easing } from "react-native-reanimated";
import { useSelector } from "react-redux";
import { Initial } from "../../../redux/types";
import colors from "../../../style/colors";
import fonts from "../../../style/fonts";
import TextWrapper from "../../shared/textwrapper";
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
  const navigation = useNavigation();

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

  const navigate = () => {
    navigation.navigate("Top10Selector");
  };

  return (
    <View style={styles.page}>
      <Text style={styles.description}>
        But first to continue, create a profile.
      </Text>
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
      <TouchableOpacity onPress={navigate}>
        <Animated.View style={{ opacity }}>
          <TextWrapper style={styles.wrapper}>
            <Text style={styles.buttonTet}>create</Text>
          </TextWrapper>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default Page3;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width,
    paddingHorizontal: "8%",
  },
  description: {
    fontSize: fonts.text20,
    color: colors.white,
    fontFamily: "RalewayMedium",
  },
  wrapper: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.purple,
    marginTop: SPACING,
  },
  buttonTet: {
    fontSize: fonts.text20,
    fontFamily: "RalewaySemiBold",
    color: colors.white,
  },
});
