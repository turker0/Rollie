import React, { useEffect } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import top10 from "../database/top10.json";
import { FlingGestureHandler } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function Onboard2() {
  const scrollXIndex = new Animated.Value(0);
  const scrollXAnimated = new Animated.Value(0);

  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  return (
    <FlingGestureHandler>
      <View style={styles.container}>
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
            marginTop: 5,
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
              outputRange: [1 - 1 / 3, 1, 1],
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
        <Text style={styles.imageTitle}>{}</Text>
      </View>
    </FlingGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 60,
  },
  description: {
    fontSize: 20,
    fontFamily: "RalewaySemiBold",
    color: "#e5e5e5",
  },
  imageContainer: {
    position: "absolute",
    left: -(width * 0.2) + 10,
    top: 0,
  },
  image: {
    width: width * 0.4,
    height: width * 0.4 * 1.48,
    borderColor: "#fff",
    borderWidth: 1,
    //borderTopRightRadius: 10,
    //borderBottomRightRadius: 10,
  },
  imageTitle: {
    paddingHorizontal: 10,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "RalewaySemiBold",
    color: "#e5e5e5",
  },
});
