import { useNavigation } from "@react-navigation/native";
import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Animated, { Easing } from "react-native-reanimated";
import { useSelector } from "react-redux";
import { User } from "../../../redux/types";
import colors from "../../../style/colors";
import fonts from "../../../style/fonts";
import Input from "../../shared/input";
import { useMutation } from "@apollo/react-hooks";
import { register } from "../../../graphql/queries";
import mailRegex from "../../../helpers/mailregex";

const SPACING = 30;
const { width } = Dimensions.get("window");
interface Props {
  toggleIsProfileVisible: () => void;
  input1: RefObject<TextInput>;
}

const Page3: FC<Props> = ({ toggleIsProfileVisible, input1 }) => {
  const input2: any = useRef<TextInput>(null);
  const input3: any = useRef<TextInput>(null);
  const user = useSelector((state: User) => state);
  const opacity = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const [registerUser, { data }] = useMutation(register);
  const [isSending, setIsSending] = useState<boolean>(false);

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
      mailRegex(user.mail) &&
      user.mail.length >= 3 &&
      user.password.length >= 3
    ) {
      animateButton(1);
    } else {
      animateButton(0);
    }
  }, [user]);

  useEffect(() => {
    setIsSending(false);
    if (data !== undefined && data.register === true) {
      navigation.navigate("Top10Selector");
    }
  }, [data]);

  const animateButton = (toValue: number) => {
    Animated.timing(opacity, {
      toValue,
      duration: 222,
      easing: Easing.linear,
    }).start();
  };

  const registerHandle = async () => {
    setIsSending(true);
    await registerUser({
      variables: {
        username: user.username,
        mail: user.mail,
        password: user.password,
      },
    });
  };

  return (
    <View style={styles.page}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>
          But first to continue, create a profile.
        </Text>
        {data !== undefined && data.register === false ? (
          <Text style={styles.error}>Email is used.</Text>
        ) : null}
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
        <TouchableOpacity onPress={registerHandle}>
          {!isSending ? (
            <Animated.View style={[styles.wrapper, { opacity }]}>
              <Text style={styles.buttonText}>create</Text>
            </Animated.View>
          ) : (
            <ActivityIndicator
              size="large"
              color="#fff"
              style={styles.wrapper}
            />
          )}
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Page3;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width,
    paddingTop: "20%",
    paddingHorizontal: "8%",
  },
  description: {
    fontSize: fonts.text24,
    color: colors.pink,
    fontFamily: "RalewayMedium",
    marginBottom: 50,
  },
  wrapper: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "7.5%",
    paddingVertical: "2.5%",
    borderRadius: 4,
    backgroundColor: colors.pink,
    marginTop: SPACING,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonText: {
    fontSize: fonts.text20,
    fontFamily: "RalewaySemiBold",
    color: colors.white,
  },
  error: {
    fontSize: fonts.text16,
    color: colors.red,
    fontFamily: "RalewaySemiBold",
    marginBottom: 15,
  },
});
