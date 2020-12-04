import React, { useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";

import top11 from "../../database/top10.json";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux/actions";
import {
  PanGestureHandler,
  PanGestureHandlerStateChangeEvent,
  State,
} from "react-native-gesture-handler";
import Animated, { Easing } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import GradientBG from "../shared/gradientbg";
import fonts from "../../style/fonts";
import colors from "../../style/colors";
import GradientColored from "../shared/gradientcolored";

const SPACING = 30;
const { width } = Dimensions.get("window");

const Top10Selector = () => {
  const [listIndex, setListIndex] = useState<number>(0);
  const dispatch = useDispatch();
  const [top10, setTop10] = useState(top11);
  const translateX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    translateX.setValue(0);
    if (listIndex > 0) {
      setTop10(
        top10.filter((item) => item.Title !== top11[listIndex - 1].Title)
      );
    }
  }, [listIndex]);

  const onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    if (listIndex === top11.length - 1) {
      dispatch(actionCreators.editUserByKey(false, "isNew"));
      navigation.navigate("Home");
    } else {
      if (event.nativeEvent.state === State.END) {
        if (event.nativeEvent.translationX < -(width * 0.125)) {
          nextAnimation();
        } else if (event.nativeEvent.translationX > width * 0.125) {
          dispatch(actionCreators.addMovie(top11[listIndex], "watched"));
          nextAnimation();
        } else {
          resetAnimation();
        }
      }
    }
  };

  const nextAnimation = () => {
    setListIndex(listIndex + 1);
  };

  const resetAnimation = () => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 200,
      easing: Easing.bounce,
    }).start();
  };

  const opacity = translateX.interpolate({
    inputRange: [-width * 0.25, 0, width * 0.25],
    outputRange: [0.9, 1, 0.9],
  });

  const scale = translateX.interpolate({
    inputRange: [-width * 0.25, 0, width * 0.25],
    outputRange: [0.92, 1, 0.92],
  });

  const opacityNo = translateX.interpolate({
    inputRange: [-width * 0.25, 0, width * 0.25],
    outputRange: [0.2, 1, 1],
  });

  const opacityYes = translateX.interpolate({
    inputRange: [-width * 0.25, 0, width * 0.25],
    outputRange: [1, 1, 0.2],
  });

  return (
    <View style={{ flex: 1 }}>
      <GradientBG />
      <View style={styles.container}>
        <Text style={styles.description}>Let's get started</Text>
        <Text style={styles.itemTitle} numberOfLines={2}>
          <Text style={styles.highlighted}>{listIndex + 1}.</Text>
          {" " + top11[listIndex].Title}
        </Text>
        <View style={styles.cardsContainer}>
          <View style={[styles.cardsContainer]}>
            <Animated.Text
              style={[
                styles.direction,
                { left: 0, color: colors.red, opacity: opacityNo },
              ]}
            >
              No
            </Animated.Text>
            <Animated.Text
              style={[
                styles.direction,
                { right: 0, color: colors.green, opacity: opacityYes },
              ]}
            >
              Yes
            </Animated.Text>
            {top10.map((item, index) => {
              const elevation = top10.length - index,
                zIndex = elevation,
                top = index * 5;
              return (
                <PanGestureHandler
                  onGestureEvent={Animated.event(
                    [
                      {
                        nativeEvent: {
                          translationX: translateX,
                        },
                      },
                    ],
                    {
                      useNativeDriver: true,
                    }
                  )}
                  onHandlerStateChange={onHandlerStateChange}
                  key={index}
                >
                  <Animated.View
                    style={[
                      styles.cardWrapper,
                      {
                        elevation,
                        zIndex,
                        top,
                      },
                      index === 0
                        ? {
                            opacity,
                            transform: [
                              {
                                scale,
                                translateX,
                              },
                            ],
                          }
                        : { transform: [{ scale: 1 - index / 90 }] },
                    ]}
                  >
                    <GradientColored />
                    <Image
                      style={styles.itemImage}
                      source={{ uri: item.Poster }}
                    />
                  </Animated.View>
                </PanGestureHandler>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Top10Selector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "8%",
    paddingTop: SPACING * 3,
  },
  description: {
    fontSize: fonts.text20,
    fontFamily: "RalewaySemiBold",
    marginTop: SPACING / 2,
    color: colors.white,
  },
  cardsContainer: {
    // width: width * 0.5 + 2,
    // height: width * 0.5 * 1.48 + 2,
    // alignSelf: "center",
  },
  cardWrapper: {
    position: "absolute",
    top: 0,
    alignSelf: "center",
    padding: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    borderRadius: 4,
  },
  itemImage: {
    width: width * 0.5,
    height: width * 0.5 * 1.48,
    resizeMode: "cover",
    borderRadius: 4,
  },

  direction: {
    position: "absolute",
    top: 0,
    height: width * 0.5 * 1.48,
    textAlignVertical: "center",
    fontSize: fonts.text20,
    fontFamily: "RalewayBold",
    letterSpacing: 1,
  },
  itemTitle: {
    fontSize: fonts.text32,
    fontFamily: "RalewayBold",
    color: colors.white,
    letterSpacing: 1,
    marginTop: SPACING / 2,
    marginBottom: SPACING / 1.5,
  },
  highlighted: {
    color: colors.purple,
    fontFamily: "RalewayBold",
  },
});
