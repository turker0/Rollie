import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import colors from "../../../style/colors";
import fonts from "../../../style/fonts";

const { width } = Dimensions.get("window");

const Page1 = () => {
  return (
    <View style={styles.page}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/throne.png")}
      />
      <Text style={styles.description}>
        Find your <Text style={styles.highlighted}>next</Text> favorite super
        duper amazing movie among over{" "}
        <Text style={styles.highlighted}>1000 iMDB 7+</Text> movies.
      </Text>
    </View>
  );
};

export default Page1;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width,
    paddingHorizontal: "8%",
    justifyContent: "flex-start",
  },
  description: {
    fontSize: fonts.text24,
    color: colors.pink,
    fontFamily: "RalewayMedium",
    textAlign: "center",
  },
  highlighted: {
    fontFamily: "RalewayBold",
    color: colors.white,
  },
  image: {
    width: width / 1.5, //2111px
    height: width / 1.5 / 1.1258666666666666666666666666667, //1875px
    alignSelf: "center",
    marginBottom: 20,
  },
});
