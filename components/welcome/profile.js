import ViewPager from "@react-native-community/viewpager";
import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import CouchSVG from "./couchsvg";
import Input from "./input";

const SPACING = 30;

const Profile = ({ toggleProfile }) => {
  const user = useSelector((state) => state.user);
  const [error, setError] = useState(true);
  const input1 = useRef(TextInput);
  const input2 = useRef(TextInput);

  useEffect(() => {
    if (user.username.length >= 3 && user.detail.length >= 3) {
      if (error) {
        setError(false);
      }
    } else {
      if (!error) {
        setError(true);
      }
    }
  }, [user]);

  const onPageSelectedHandler = (position) => {
    if (position === 1) {
      input1.current.focus();
    }
  };

  const inputNextHandler = () => {
    input2.current.focus();
  };
  return (
    <ViewPager
      style={styles.container}
      transitionStyle="scroll"
      onPageSelected={(e) => onPageSelectedHandler(e.nativeEvent.position)}
    >
      <View style={styles.viewPages} key={"page1"}>
        <Text style={styles.description}>
          Find your <Text style={styles.highlighted}>next</Text> favorite super
          duper amazing movie among over{" "}
          <Text style={styles.highlighted}>1000 iMDB 7+</Text> movies.
        </Text>
        <CouchSVG />
        <Text style={styles.swipeText}>
          Swipe left and{" "}
          <Text style={styles.highlighted}>create a profile</Text>.
        </Text>
      </View>
      <View style={styles.viewPages} key={"page2"}>
        <Text style={styles.description}>Create a profile</Text>
        <Input
          placeholder="Your name"
          id="username"
          ref={input1}
          nextHanler={inputNextHandler}
          maxLength={12}
        />
        <Input placeholder="Detail" id="detail" ref={input2} maxLength={20} />
        {!error && (
          <TouchableOpacity onPress={toggleProfile} style={styles.button}>
            <Text style={styles.buttonTet}>Create</Text>
          </TouchableOpacity>
        )}
      </View>
    </ViewPager>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewPages: {
    paddingHorizontal: SPACING,
    paddingVertical: SPACING / 2,
    position: "relative",
  },
  description: {
    fontSize: 20,
    fontFamily: "RalewaySemiBold",
    color: "#f5f5f5",
  },
  swipeText: {
    fontSize: 18,
    fontFamily: "RalewaySemiBold",
    color: "#fff",
  },
  button: {
    height: SPACING * 1.2,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: SPACING / 2,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#665DF5",
    backgroundColor: "#000",
    marginTop: SPACING,
  },
  buttonTet: {
    fontSize: 18,
    fontFamily: "RalewayBold",
    color: "#665DF5",
  },

  highlighted: {
    color: "#665DF5",
    fontFamily: "RalewayBold",
  },
});
