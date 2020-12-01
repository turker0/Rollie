import React, { FC, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Animated,
  LayoutChangeEvent,
  Image,
} from "react-native";
import {
  FlatList,
  PanGestureHandler,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import top10 from "../../database/top10.json";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux/actions";
import { LinearGradient } from "expo-linear-gradient";

const SPACING = 30;
const { width } = Dimensions.get("window");

const Top10Selector: FC = () => {
  const [listIndex, setListIndex] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const imageListRef: any = useRef(null);
  const titleListRef: any = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (imageListRef.current !== null) {
      imageListRef.current.scrollToIndex({
        index: listIndex,
        animated: true,
      });
    }
    if (titleListRef.current !== null) {
      titleListRef.current.scrollToIndex({
        index: listIndex,
        animated: true,
      });
    }
  }, [listIndex]);

  const clickHandler = (key?: string) => {
    if (key === "watched") {
      //dispatch(actionCreators.addMovie(top10[listIndex].Title, key));
    }
    if (listIndex === top10.length - 1) {
      //dispatch(actionCreators.setIsNew(false));
    } else {
      //setListIndex(listIndex + 1);
    }
  };

  const measureH = (e: LayoutChangeEvent) => {
    if (height === 0) {
      setHeight(e.nativeEvent.layout.height);
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
          <View style={styles.itemContainer}>
            <View style={styles.itemImageContainer}>
              <LinearGradient
                colors={["#e76f51", "#2a9d8f"]}
                style={styles.gradient}
              />
              <View style={styles.itemImageWrapper}>
                <FlatList
                  ref={imageListRef}
                  data={top10}
                  keyExtractor={(item) => item.Title}
                  horizontal
                  bounces={false}
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => {
                    return (
                      <PanGestureHandler>
                        <Image
                          style={styles.itemImage}
                          source={{ uri: item.Poster }}
                        />
                      </PanGestureHandler>
                    );
                  }}
                />
              </View>
            </View>
            <View style={styles.itemButtonWrapper}>
              <TouchableOpacity
                style={[styles.itemButton, { borderColor: "#2a9d8f" }]}
                onPress={() => clickHandler("watched")}
              >
                <Ionicons name="md-arrow-dropup" size={18} color="#2a9d8f" />
                <Text style={[styles.itemButtonText, { color: "#2a9d8f" }]}>
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.itemButton, { borderColor: "#e76f51" }]}
                onPress={() => clickHandler}
              >
                <Text style={[styles.itemButtonText, { color: "#e76f51" }]}>
                  No
                </Text>
                <Ionicons name="md-arrow-dropdown" size={18} color="#e76f51" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={height !== 0 ? { height } : null}>
            <FlatList
              ref={titleListRef}
              data={top10}
              horizontal
              keyExtractor={(item) => item.Title}
              showsHorizontalScrollIndicator={false}
              bounces={false}
              scrollEnabled={false}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={styles.itemTextWrapper}
                    onLayout={(e) => measureH(e)}
                  >
                    <Text style={styles.itemTitle} numberOfLines={1}>
                      <Text style={styles.highlighted}>{index + 1}.</Text>{" "}
                      {item.Title}
                    </Text>
                    <Text style={styles.itemDetails} numberOfLines={1}>
                      <FontAwesome name="star" size={16} color="#fcf300" />{" "}
                      {item.imdbRating} {"  "} {item.Year} {"  "}{" "}
                      {
                        //item.Genre
                        "Item Genre goes here"
                      }
                    </Text>
                  </View>
                );
              }}
            />
          </View>
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
    borderTopStartRadius: 120,
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
  itemImageContainer: {
    padding: SPACING / 6,
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 20,
    elevation: 7,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
    elevation: -1,
    borderRadius: 4,
  },
  itemImageWrapper: {
    width: width * 0.5,
    height: width * 0.5 * 1.48,
    overflow: "hidden",
    alignItems: "center",
    borderRadius: 4,
  },
  itemImage: {
    width: width * 0.5,
    height: width * 0.5 * 1.48,
    resizeMode: "cover",
  },
  itemContainer: {
    marginVertical: SPACING / 2,
    width: "100%",
    flexDirection: "row",
  },
  itemButtonWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  itemButton: {
    width: "60%",
    marginVertical: SPACING / 2,
    paddingVertical: SPACING / 2,
    borderRadius: 12,
    borderWidth: SPACING / 6,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  itemButtonText: {
    fontSize: 20,
    fontFamily: "RalewayBlack",
    color: "#fff",
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
