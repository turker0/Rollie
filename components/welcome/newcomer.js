import React, { useState } from "react";
import {
  StatusBar,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import Profile from "./profile";
import Top10Selector from "./top10selector";

const SPACING = 30;

const Newcomer = ({}) => {
  const [profile, setProfile] = useState(false);
  const toggleProfile = () => {
    setProfile(!profile);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar barStyle="default" />
      <Text style={styles.title}>Rollie</Text>
      {!profile ? <Profile toggleProfile={toggleProfile} /> : <Top10Selector />}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  title: {
    paddingTop: SPACING * 2,
    paddingLeft: SPACING,
    fontSize: 32,
    color: "#fff",
    fontFamily: "RalewayBlack",
    letterSpacing: 1,
  },
});

export default Newcomer;
