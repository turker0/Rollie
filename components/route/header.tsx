import MaskedView from "@react-native-community/masked-view";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../style/colors";
import fonts from "../../style/fonts";
import GradientHorizontal from "../shared/gradienthorizontal";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const toggleDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.container}>
      <GradientHorizontal />
      <View style={styles.wrapper}>
        <MaskedView
          style={{ flex: 1, flexDirection: "row", height: "100%" }}
          maskElement={
            <View style={styles.masked}>
              <TouchableOpacity style={styles.icon} onPress={toggleDrawer}>
                <MaterialIcons name="menu" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.title}>Rollie</Text>
            </View>
          }
        >
          <GradientHorizontal />
        </MaskedView>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    //justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.dark,
    marginBottom: 1,
  },
  title: {
    fontSize: fonts.text32,
    color: colors.pink,
    fontFamily: "RalewayBold",
    letterSpacing: 5,
    textTransform: "uppercase",
  },
  masked: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    position: "absolute",
    left: 25,
  },
});
