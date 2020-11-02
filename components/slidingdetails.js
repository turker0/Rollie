import React from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window"),
  DEFAULT_SPACING = 20;

const SlidingDetails = React.forwardRef(({ data, tail, icon }, ref) => {
  return (
    <View style={styles.carouselStats}>
      <View style={{ width: 20, marginHorizontal: DEFAULT_SPACING }}>
        {icon}
      </View>
      <FlatList
        data={data}
        ref={ref}
        keyExtractor={(_, index) => String(index)}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}
        scrollEnabled={false}
        renderToHardwareTextureAndroid
        decelerationRate="fast"
        renderItem={({ item, index }) => {
          return (
            <Text style={styles.description}>
              {item[tail].replace("(", "").replace(")", "")}
            </Text>
          );
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  carouselStats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: width * 0.5 - DEFAULT_SPACING * 2,
    height: (width * 0.5 * 1.48) / 4,
    elevation: 6,
    zIndex: 6,
  },
  description: {
    fontSize: 14,
    color: "#DAE0E6",
    fontFamily: "RalewaySemiBold",
    height: (width * 0.5 * 1.48) / 4,
    paddingRight: 10,
    textAlignVertical: "center",
  },
});

export default SlidingDetails;
