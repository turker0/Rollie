import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import {
  MaterialIcons,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const DEFAULT_SPACING = 20;

export default function Card({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.poster}>
        <View>
          <Text style={styles.carouselTitle}>{item.Title}</Text>
        </View>
        <Image
          source={{ uri: item.Image }}
          resizeMode="cover"
          style={{
            width: width * 0.5,
            height: width * 0.5 * 1.48,
            borderRadius: 4,
          }}
        />
      </View>
      <View style={styles.stats}>
        <View style={styles.detailsWrapper}>
          <MaterialIcons name="date-range" size={18} color="#fff" />
          <Text style={styles.carouselDetail}>
            {item.Year.replace("(", "").replace(")", "")}
          </Text>
        </View>
        <View style={styles.detailsWrapper}>
          <MaterialCommunityIcons
            name="arrange-send-to-back"
            size={18}
            color="#fff"
          />
          <Text style={styles.carouselDetail}>{item.Genres}</Text>
        </View>
        <View style={styles.detailsWrapper}>
          <AntDesign name="clockcircleo" size={18} color="#fff" />
          <Text style={styles.carouselDetail}>{item.Duration}</Text>
        </View>
        <View style={styles.detailsWrapper}>
          <FontAwesome name="star-half-empty" size={18} color="#fff" />
          <Text style={styles.carouselDetail}>{item.Rating}</Text>
        </View>
        {
          //<Text style={styles.carouselTitle}>{item.Details}</Text>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
  },
  poster: {
    justifyContent: "space-between",
    width: width * 0.5,
  },
  carouselTitle: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "RalewayMedium",
  },
  carouselDetailWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  carouselDetails: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "RalewayRegular",
    textAlign: "center",
    marginHorizontal: DEFAULT_SPACING * 0.05,
  },
  stats: {
    justifyContent: "center",
    padding: DEFAULT_SPACING,
    width: width * 0.5 - DEFAULT_SPACING * 2,
  },
  detailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  carouselDetail: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "RalewayMedium",
    marginLeft: DEFAULT_SPACING * 0.5,
    marginVertical: DEFAULT_SPACING * 0.5,
  },
});
