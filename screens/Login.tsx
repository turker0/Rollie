import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import GradientBG from "../components/shared/gradientbg";
import Input from "../components/shared/input";
import colors from "../style/colors";
import fonts from "../style/fonts";
import { login } from "../graphql/queries";
import { useMutation } from "@apollo/react-hooks";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/actions";
import { hardReset } from "../redux/reducers";

const Login = () => {
  const input2: any = useRef<TextInput>(null);
  const input3: any = useRef<TextInput>(null);
  const [mail, setMail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const opacity = useRef(new Animated.Value(0)).current;
  const [loginRequest, { data }] = useMutation(login);
  const dispatch = useDispatch();

  useEffect(() => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(String(mail).toLowerCase()) && pass.length >= 3) {
      animateButton(1);
    } else {
      animateButton(0);
    }
  }, [mail, pass]);

  useEffect(() => {
    setIsSending(false);
    if (data !== undefined) {
      if (data.login) {
        dispatch(actionCreators.setUser(data.login));
        dispatch(actionCreators.editUserByKey(true, "isLoggedIn"));
      } else {
        setError("Wrong e-mail or password.");
      }
    }
  }, [data]);

  async function loginHandle() {
    setIsSending(true);
    await loginRequest({
      variables: {
        mail: mail,
        password: pass,
      },
    });
  }

  function reset() {
    dispatch(actionCreators.setUser(hardReset));
  }

  function animateButton(toValue: number) {
    Animated.timing(opacity, {
      toValue,
      duration: 222,
      easing: Easing.linear,
    }).start();
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <GradientBG />
      <Text style={styles.description}>Login</Text>
      <Text style={styles.error}>{error}</Text>
      <Input
        placeholder="E-mail"
        id="mail"
        ref={input2}
        maxLength={32}
        setter={setMail}
      />
      <Input
        placeholder="Password"
        id="password"
        isPassword
        ref={input3}
        maxLength={20}
        setter={setPass}
      />
      <TouchableOpacity onPress={loginHandle}>
        {!isSending ? (
          <Animated.View style={[styles.wrapper, { opacity }]}>
            <Text style={styles.buttonText}>login</Text>
          </Animated.View>
        ) : (
          <ActivityIndicator size="large" color="#fff" style={styles.wrapper} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={reset}>
        <Text style={styles.buttonText}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    paddingHorizontal: "8%",
  },
  description: {
    fontSize: fonts.text32,
    color: colors.pink,
    fontFamily: "RalewayBold",
    marginBottom: 30,
    letterSpacing: 2,
  },
  wrapper: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "7.5%",
    paddingVertical: "2.5%",
    borderRadius: 4,
    backgroundColor: colors.pink,
    marginTop: 30,
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
    marginBottom: 10,
  },
});
