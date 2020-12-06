import React, { useRef, useState } from "react";
import {
  StatusBar,
  View,
  Animated,
  StyleSheet,
  Dimensions,
  Easing,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../style/colors";
import GradientBG from "../shared/gradientbg";
import Page0 from "./pages/page0";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";

const SPACING = 30;
const { width } = Dimensions.get("window");

const Newcomer = () => {
  const [isProfileVisible, setIsProfileVisible] = useState<boolean>(false);
  const toggleIsProfileVisible = () => setIsProfileVisible(!isProfileVisible);
  const input1: any = useRef<TextInput>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const Pages: JSX.Element[] = [
    <Page0 />,
    <Page1 />,
    <Page2 />,
    <Page3 toggleIsProfileVisible={toggleIsProfileVisible} input1={input1} />,
  ];

  const indicatiorAnimation = (toValue: number) => {
    Animated.timing(opacity, {
      toValue,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const onViewableItemsChanged = (viewableItems: any) => {
    if (
      viewableItems.viewableItems[0].index === 1 ||
      viewableItems.viewableItems[0].index === 2
    ) {
      indicatiorAnimation(1);
    } else {
      indicatiorAnimation(0);
      if (viewableItems.viewableItems[0].index === Pages.length - 1) {
        if (input1.current !== null) {
          input1.current.focus();
        }
      }
    }
  };

  const scale = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  return (
    <View style={{ flex: 1 }}>
      <GradientBG />
      <StatusBar barStyle="default" />
      <Animated.FlatList
        data={Pages}
        keyExtractor={(_, index: number) => `Page` + index}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged}
        contentContainerStyle={{
          paddingTop: SPACING * 3,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          const translateX = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [0, 0, -width * 0.3],
          });
          return (
            <Animated.View style={[{ transform: [{ translateX }] }]}>
              {item}
            </Animated.View>
          );
        }}
      />
      <Animated.View
        style={[
          styles.indicatorContainer,
          { opacity, transform: [{ scale: scale }] },
        ]}
      >
        {Pages.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });
          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: [colors.gray, colors.pink, colors.gray],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={index}
              style={[
                styles.indicator,
                { transform: [{ scale }], backgroundColor },
              ]}
            />
          );
        })}
      </Animated.View>
    </View>
  );
};

export default Newcomer;

const styles = StyleSheet.create({
  indicatorContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: "5%",
    alignSelf: "center",
  },
  indicator: {
    width: SPACING / 2,
    height: SPACING / 2,
    borderRadius: SPACING / 2,
    marginHorizontal: SPACING / 4,
  },
});
