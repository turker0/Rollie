import React, { FC, useRef } from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Page1 from "./page1";
import Page2 from "./page2";

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
    if (viewableItems.viewableItems[0].index === 1) {
      input1.current.focus();
    }
  };

  return (
    <KeyboardAwareScrollView style={{ width, height }}>
      <View style={{ flex: 1 }}>
        <Animated.FlatList
          data={BGS}
          keyExtractor={(_: string, index: number) => `Page` + index}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          onViewableItemsChanged={onViewableItemsChanged}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          renderItem={({ _, index }) => {
            const inputRange = [
              ((index - 1) * width) / 2,
              index * width,
              ((index + 1) * width) / 2,
            ];
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.2, 1, 0.2],
            });
            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.95, 1, 0.95],
            });
            return (
              <Animated.View style={{ opacity, transform: [{ scale }] }}>
                {index === 0 ? (
                  <Page1 />
                ) : (
                  <Page2
                    toggleIsProfileVisible={toggleIsProfileVisible}
                    input1={input1}
                  />
                )}
              </Animated.View>
            );
          }}
        />
      </View>
      <View style={styles.indicatorContainer}>
        {BGS.map((_, index) => {
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
    bottom: 0,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SPACING / 2,
  },
  indicator: {
    width: SPACING / 2,
    height: SPACING / 2,
    borderRadius: SPACING / 2,
    marginHorizontal: SPACING / 3,
  },
});
