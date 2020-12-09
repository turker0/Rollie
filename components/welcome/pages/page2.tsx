import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import colors from "../../../style/colors";
import fonts from "../../../style/fonts";

const { width } = Dimensions.get("window");

const Page2 = () => {
  return (
    <View style={styles.page}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/swipe.png")}
      />
      <Text style={styles.description}>
        Swipe left for movies you{" "}
        <Text style={styles.highlighted}>watched</Text> and right for{" "}
        <Text style={styles.highlighted}>unwatched</Text>.
      </Text>
      {/* <SWIPESVG /> */}
    </View>
  );
};

export default Page2;

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
    textAlign: "center",
  },
  highlighted: {
    fontFamily: "RalewayBold",
    color: colors.white,
  },
  image: {
    width: width / 1.5, //1512px
    height: width / 1.5 / 1.2403609515996718621821164889253, //1219px
    alignSelf: "center",
    marginBottom: 20,
  },
});
