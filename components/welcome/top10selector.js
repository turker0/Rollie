import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import top10 from "../../database/top10.json";
import Animated, { Easing } from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux/actions";

const SPACING = 30;
const { width } = Dimensions.get("window");

const Top10Selector = () => {
  const [listIndex, setListIndex] = useState(0);
  const listRef = useRef(FlatList);
  const opacity = new Animated.Value(0);
  const dispatch = useDispatch();

  useEffect(() => {
    listRef.current?.scrollToIndex({
      animated: true,
      index: listIndex,
    });
    Animated.timing(opacity, {
      toValue: 1,
      duration: 444,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [listIndex]);

  const clickHandler = (key) => {
    if (key === "watched") {
      dispatch(actionCreators.addMovie(top10[listIndex].Title, key));
    }
    if (listIndex === top10.length - 1) {
      dispatch(actionCreators.setIsNew(false));
    } else {
      setListIndex(listIndex + 1);
    }
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <View style={styles.container}>
        <Text style={styles.description}>Let's get started</Text>
        <View>
          <Text style={styles.itemHeader}>Have you watched these movies? </Text>
          <FlatList
            ref={listRef}
            data={top10}
            keyExtractor={(item) => String(item.Title)}
            horizontal
            scrollEventThrottle={16}
            scrollEnabled={false}
            renderItem={({ item, index }) => {
              return (
                <Animated.View style={[styles.itemContainer, { opacity }]}>
                  <View style={styles.itemImageContainer}>
                    <Image
                      style={styles.itemImage}
                      source={{ uri: item.Poster }}
                    />
                    <View style={styles.itemButtonWrapper}>
                      <TouchableOpacity
                        style={styles.itemButton}
                        onPress={() => clickHandler("watched")}
                      >
                        <Ionicons
                          name="md-arrow-dropup"
                          size={18}
                          color="#2a9d8f"
                        />
                        <Text
                          style={[styles.itemButtonText, { color: "#2a9d8f" }]}
                        >
                          Yes
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.itemButton}
                        onPress={() => clickHandler()}
                      >
                        <Text
                          style={[styles.itemButtonText, { color: "#e76f51" }]}
                        >
                          No
                        </Text>
                        <Ionicons
                          name="md-arrow-dropdown"
                          size={18}
                          color="#e76f51"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text style={styles.itemTitle} numberOfLines={2}>
                    <Text style={styles.highlighted}>{index + 1}.</Text>{" "}
                    {item.Title}
                  </Text>
                  <Text style={styles.itemDetails} numberOfLines={2}>
                    <FontAwesome name="star" size={16} color="#fcf300" />{" "}
                    {item.imdbRating} {"  "} {item.Year} {"  "} {item.Genre}
                  </Text>
                </Animated.View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
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
  itemHeader: {
    fontSize: 18,
    fontFamily: "RalewaySemiBold",
    borderLeftWidth: 4,
    borderRadius: 2,
    borderColor: "#665DF5",
    color: "#CDCBCB",
    marginTop: SPACING / 2,
    paddingLeft: SPACING / 6 + 5,
  },
  itemContainer: {
    marginTop: SPACING / 2,
    width: width - SPACING * 2,
  },
  itemImageContainer: {
    flexDirection: "row",
  },
  itemImage: {
    width: width * 0.5,
    height: width * 0.5 * 1.48,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#2e2e2e",
  },
  itemButtonWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  itemButton: {
    width: "60%",
    marginVertical: SPACING / 2,
    paddingVertical: SPACING / 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#2e2e2e",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  itemButtonText: {
    fontSize: 20,
    fontFamily: "RalewayBold",
    color: "#fff",
  },
  itemTitle: {
    fontSize: 18,
    fontFamily: "RalewayBold",
    color: "#e5e5e5",
    letterSpacing: 1,
    marginTop: SPACING / 2,
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
