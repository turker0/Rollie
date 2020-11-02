import React, { useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import ViewPager from "@react-native-community/viewpager";
import CouchSVG from "../components/couchsvg";
import AvatarsList from "../components/avatarslist";
import Input from "../components/input";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import top10 from "../database/top10.json";

const { width, height } = Dimensions.get("window");

const SPACING = 30;

export default function Welcome({ navigation }) {
  const scrollXIndex = new Animated.Value(0);
  const scrollXAnimated = new Animated.Value(0);
  const [index, setIndex] = useState(0);
  const setActiveIndex = useCallback((activeIndex) => {
    setIndex(activeIndex);
    scrollXIndex.setValue(activeIndex);
  });

  useEffect(() => {
    setActiveIndex(index);
  }, [index]);

  /*
  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  */

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Text style={styles.title}>Rollie</Text>
      <ViewPager
        style={styles.container}
        initialPage={1}
        transitionStyle="curl"
      >
        <View style={styles.viewPages} key={"1"}>
          <Text style={styles.description}>
            Find your next favorite super duper amazing movie among over 1000
            iMDB 7+ movies.
          </Text>
          <CouchSVG />
          <Text style={styles.swipeText}>Swipe left and create a profile.</Text>
        </View>
        <View style={styles.viewPages} key={"2"}>
          <Text style={styles.description}>Type your profile details</Text>
          <Input placeholder="Your name" />
          <Input placeholder="Type something dummy" />
          <Text style={styles.description}>Pick an avatar</Text>
          <AvatarsList />
          <Text style={styles.swipeText}>Swipe left to proceed.</Text>
        </View>
        <View style={styles.viewPages} key={"3"}>
          <Text style={styles.description}>Have you watched these movies?</Text>
          <FlatList
            data={top10}
            keyExtractor={(item) => {
              String("xd" + item.Poster);
            }}
            horizontal
            inverted
            scrollEnabled={false}
            bounces={false}
            contentContainerStyle={{
              flex: 1,
              justifyContent: "center",
              marginTop: SPACING * 0.5,
            }}
            CellRendererComponent={({
              item,
              index,
              children,
              style,
              ...props
            }) => {
              const newStyle = [
                style,
                {
                  elevation: top10.length - index,
                  zIndex: top10.length - index,
                },
              ];

              return (
                <View style={newStyle} index={index} {...props}>
                  {children}
                </View>
              );
            }}
            scrollEnabled={false}
            removeClippedSubviews={false}
            renderItem={({ item, index }) => {
              const inputRange = [index - 1, index, index + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [20, 0, -width * 0.14],
              });
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.92, 1, 1.3],
              });
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / 4, 1, 1],
              });
              return (
                <Animated.View
                  key={item.Poster}
                  style={[
                    styles.imageContainer,
                    {
                      opacity,
                      transform: [
                        {
                          translateX,
                        },
                        { scale },
                      ],
                    },
                  ]}
                >
                  <Image style={styles.image} source={{ uri: item.Poster }} />
                </Animated.View>
              );
            }}
          />
          <Text style={styles.description}>{top10[index].Title}</Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                if (index === 9) {
                  navigation.navigate("Roll");
                } else {
                  setIndex((prev) => prev + 1);
                }
              }}
            >
              <Text style={styles.buttonText}>Nope</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonContainer, { marginLeft: SPACING }]}
              onPress={() => {
                if (index === 9) {
                  navigation.navigate("Roll");
                } else {
                  setIndex((prev) => prev + 1);
                }
              }}
            >
              <Text style={styles.buttonText}>Yep</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ViewPager>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  viewPages: {
    paddingHorizontal: SPACING,
    paddingVertical: SPACING / 2,
    justifyContent: "space-between",
    position: "relative",
  },
  title: {
    paddingTop: SPACING * 2,
    paddingLeft: SPACING,
    fontSize: 32,
    color: "#fff",
    fontFamily: "RalewayBlack",
    letterSpacing: 1,
  },
  description: {
    fontSize: 20,
    fontFamily: "RalewaySemiBold",
    color: "#e5e5e5",
  },
  swipeText: {
    fontSize: 18,
    fontFamily: "RalewayBold",
    color: "#fff",
  },
  imageContainer: {
    position: "absolute",
    //left: -(width * 0.2) + 10,
    top: 0,
    left: 0,
  },
  image: {
    width: width * 0.4,
    height: width * 0.4 * 1.48,
    borderColor: "#fff",
    borderWidth: 1,
    //borderTopRightRadius: 10,
    //borderBottomRightRadius: 10,
  },
  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SPACING,
  },
  buttonContainer: {
    paddingVertical: SPACING * 0.3,
    paddingHorizontal: SPACING,
    borderRadius: SPACING / 4,
    borderWidth: 3,
    borderColor: "#fff",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "RalewayBold",
    textAlignVertical: "center",
    paddingBottom: SPACING / 6,
    color: "#fff",
  },
});
