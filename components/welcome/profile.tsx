import React, { FC, useRef } from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

const SPACING = 30;
const BGS = ["#665DF5", "#2e2e2e"];
const { width, height } = Dimensions.get("window");

interface Props {
  toggleIsProfileVisible: () => void;
}

const Profile: FC<Props> = ({ toggleIsProfileVisible }) => {
  const input1: any = useRef<TextInput>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onViewableItemsChanged = (viewableItems: any) => {
    if (viewableItems.viewableItems[0].index === Pages.length - 1) {
      input1.current.focus();
    }
  };

  const Pages: JSX.Element[] = [
    <Page1 />,
    <Page2 />,
    <Page3 toggleIsProfileVisible={toggleIsProfileVisible} input1={input1} />,
  ];

  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <Animated.FlatList
        data={Pages}
        keyExtractor={(_, index: number) => `Page` + index}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        style={{ height: height * 0.8 - SPACING }}
        onViewableItemsChanged={onViewableItemsChanged}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => item}
      />

      <View style={styles.indicatorContainer}>
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
            outputRange: [BGS[1], BGS[0], BGS[1]],
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
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  indicatorContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: SPACING,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    width: SPACING / 2,
    height: SPACING / 2,
    borderRadius: SPACING / 2,
    marginHorizontal: SPACING / 4,
  },
});
