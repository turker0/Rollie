import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  Text,
} from "react-native";
import colors from "../../../style/colors";
import fonts from "../../../style/fonts";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const words = " Roll a movie to your watcher. Oh valley of plenty."
  .trim()
  .split(" ");
let animatedWords: Animated.Value[] = [];
words.forEach((word: string, index: number) => {
  animatedWords[index] = new Animated.Value(0);
});

const Page0 = ({}) => {
  useEffect(() => startAnimation(), []);

  const startAnimation = () => {
    const animations = words.map((_: string, index: number) => {
      return Animated.timing(animatedWords[index], {
        toValue: 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      });
    });
    Animated.stagger(400, animations).start(() => startNextAnimation());
  };
  const nextAnimation = new Animated.Value(0);
  const startNextAnimation = () => {
    Animated.timing(nextAnimation, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const translateX = nextAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 15, 0],
  });

  return (
    <Animated.View style={styles.page}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {words.map((word: string, index: number) => {
          const color = animatedWords[index].interpolate({
            inputRange: [0, 1],
            outputRange: [colors.purple, colors.pink],
          });
          const translateY = animatedWords[index].interpolate({
            inputRange: [0, 1],
            outputRange: [10, 0],
          });

          return (
            <Animated.Text
              style={[
                styles.text,
                {
                  opacity: animatedWords[index],
                  color,
                  transform: [{ translateY }],
                },
              ]}
              key={word + String(index)}
            >
              {word + " "}
            </Animated.Text>
          );
        })}
      </View>
      <View
        style={{ justifyContent: "center", alignItems: "flex-end", flex: 1 }}
      >
        <Animated.View
          style={{ opacity: nextAnimation, transform: [{ translateX }] }}
        >
          <FontAwesome
            name="angle-right"
            size={32}
            color={colors.white}
            style={{ marginTop: 2.5, marginLeft: 5 }}
          />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default Page0;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width,
    paddingHorizontal: "8%",
  },
  text: {
    fontSize: fonts.text52,
    fontFamily: "RalewayBold",
  },
});
