import React, { useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";

import top11 from "../../database/top10.json";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux/actions";
import { LinearGradient } from "expo-linear-gradient";
import {
  PanGestureHandler,
  PanGestureHandlerStateChangeEvent,
  State,
} from "react-native-gesture-handler";
import Animated, { Easing } from "react-native-reanimated";

const SPACING = 30;
const { width } = Dimensions.get("window");

const Top10Selector = () => {
  const [listIndex, setListIndex] = useState<number>(0);
  const dispatch = useDispatch();
  const [top10, setTop10] = useState(top11);
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    translateX.setValue(0);
    translateY.setValue(0);
    if (listIndex > 0) {
      setTop10(
        top10.filter((item) => item.Title !== top11[listIndex - 1].Title)
      );
    }
  }, [listIndex]);

  const onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    //check end
    if (listIndex === top11.length - 1) {
      dispatch(actionCreators.editUserByKey(false, "isNew"));
    }

    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationX < -(width * 0.125)) {
        nextAnimation();
      } else if (event.nativeEvent.translationX > width * 0.125) {
        //add movie to watchedS
        dispatch(actionCreators.addMovie(top11[listIndex], "watched"));
        nextAnimation();
      } else {
        resetAnimation();
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
    Animated.timing(translateY, {
      toValue: 0,
      duration: 200,
      easing: Easing.bounce,
    }).start();
  };

  const opacity = translateX.interpolate({
    inputRange: [-width * 0.25, 0, width * 0.25],
    outputRange: [0.25, 1, 0.25],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Let's get started</Text>
      <View style={styles.cardsContainer}>
        <View style={[styles.cardsContainer]}>
          {top10.map((item, index) => {
            const elevation = top10.length - index,
              zIndex = elevation;
            const scale = 1 - index / 90;
            const top = index * 5;
            return (
              <PanGestureHandler
                onGestureEvent={Animated.event(
                  [
                    {
                      nativeEvent: {
                        translationX: translateX,
                        translationY: translateY,
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
                              translateY,
                            },
                          ],
                        }
                      : { transform: [{ scale }] },
                  ]}
                >
                  <LinearGradient
                    colors={["#e76f51", "#2a9d8f"]}
                    style={[styles.gradient, StyleSheet.absoluteFillObject]}
                  />
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
  );
};

export default Top10Selector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING,
  },
  description: {
    fontSize: 20,
    fontFamily: "RalewaySemiBold",
    marginTop: SPACING / 2,
    color: "#fff",
  },
  cardsContainer: {
    width: width * 0.5 + 2,
    height: width * 0.5 * 1.48 + 2,
    alignSelf: "center",
  },
  cardWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
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
  gradient: {
    zIndex: -1,
    elevation: -1,
    borderRadius: 4,
  },

  itemTextWrapper: {
    width: width - SPACING * 2,
  },
  itemTitle: {
    fontSize: 20,
    fontFamily: "RalewayBold",
    color: "#e5e5e5",
    letterSpacing: 1,
    marginBottom: SPACING / 6,
  },
  itemDetails: {
    fontSize: 16,
    fontFamily: "RalewayMedium",
    color: "#CDCBCB",
    letterSpacing: 1,
  },
  highlighted: {
    color: "#665DF5",
    fontFamily: "RalewayBold",
  },
});
