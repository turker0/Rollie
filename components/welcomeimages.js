import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

const { width, height } = Dimensions.get("window");
const SPACING = 30;

const WelcomeImages = ({ top10, scrollXAnimated }) => {
  return (
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
      CellRendererComponent={({ item, index, children, style, ...props }) => {
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
          outputRange: [1 - 1 / 4, 1, 0],
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
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  image: {
    width: width * 0.4,
    height: width * 0.4 * 1.48,
    borderColor: "#fff",
    borderWidth: 1,
  },
});
export default WelcomeImages;
