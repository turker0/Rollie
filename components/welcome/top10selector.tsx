import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  BackHandler,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../redux/actions";
import {
  PanGestureHandler,
  PanGestureHandlerStateChangeEvent,
  State,
} from "react-native-gesture-handler";
import Animated, { Easing } from "react-native-reanimated";
import GradientBG from "../shared/gradientbg";
import fonts from "../../style/fonts";
import colors from "../../style/colors";
import GradientColored from "../shared/gradientcolored";
import topraw from "../../database/top10.json";
import { useMutation } from "@apollo/react-hooks";
import { update } from "../../graphql/queries";
import { User } from "../../redux/types";
import { useFocusEffect } from "@react-navigation/native";

const SPACING = 30;
const { width } = Dimensions.get("window");

const Top10Selector = () => {
  const [listIndex, setListIndex] = useState<number>(0);
  const [top10, setTop10] = useState(topraw);
  const dispatch = useDispatch();
  const translateX = useRef(new Animated.Value(0)).current;
  const movies = useSelector((state: User) => state.movies);
  const mail = useSelector((state: User) => state.mail);
  const [updateRequest, { data }] = useMutation(update);

  useEffect(() => {
    translateX.setValue(0);
    if (listIndex > 0) {
      setTop10(
        top10.filter((item) => item.Title !== topraw[listIndex - 1].Title)
      );
    }
  }, [listIndex]);

  const hardwareBackPressCustom = useCallback(() => {
    return true;
  }, []);

  useFocusEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", hardwareBackPressCustom);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        hardwareBackPressCustom
      );
    };
  });

  const onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    if (listIndex === topraw.length - 1) {
      if (event.nativeEvent.translationX > width * 0.125) {
        dispatch(actionCreators.addMovie(topraw[listIndex], "watched"));
      }
      updateTop10();
    } else {
      if (event.nativeEvent.state === State.END) {
        if (event.nativeEvent.translationX < -(width * 0.125)) {
          nextAnimation();
        } else if (event.nativeEvent.translationX > width * 0.125) {
          dispatch(actionCreators.addMovie(topraw[listIndex], "watched"));
          nextAnimation();
        } else {
          resetAnimation();
        }
      }
    }
  };

  async function updateTop10() {
    await updateRequest({
      variables: {
        mail: mail,
        movies: movies,
      },
    });
    dispatch(actionCreators.editUserByKey(true, "isLoggedIn"));
    dispatch(actionCreators.editUserByKey(false, "isNew"));
  }

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
        <Text style={styles.description}>
          Let's get started. How many movies you watched among iMDB Top10 List?
        </Text>
        <Text style={styles.itemTitle} numberOfLines={2}>
          <Text style={styles.highlighted}>{listIndex + 1}.</Text>
          {" " + topraw[listIndex].Title + "\n"}
        </Text>
        <View style={styles.cardsContainer}>
          <Animated.Text
            style={[
              styles.direction,
              { left: 0, color: colors.red, opacity: opacityNo },
            ]}
          >
            {"< "}No
          </Animated.Text>
          <Animated.Text
            style={[
              styles.direction,
              { right: 0, color: colors.green, opacity: opacityYes },
            ]}
          >
            Yes{" >"}
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
  );
};

export default Top10Selector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "8%",
    paddingTop: SPACING,
  },
  description: {
    fontSize: fonts.text20,
    fontFamily: "RalewaySemiBold",
    marginTop: SPACING / 2,
    color: colors.pink,
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
