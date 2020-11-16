import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CategoryItem from "./categoryitem";

const { width, height } = Dimensions.get("window");
const SPACING = 30;

export default function MovieCategory({ title, movies, navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ item }) => item}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item, index }) => {
          return (
            <CategoryItem key={index} title={item} navigation={navigation} />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING / 2,
  },
  title: {
    fontSize: 20,
    fontFamily: "RalewaySemiBold",
    color: "#fff",
    marginBottom: SPACING / 3,
    paddingHorizontal: SPACING,
  },
  contentContainer: {
    paddingHorizontal: SPACING,
  },
  itemContainer: {
    width: width * 0.3,
    backgroundColor: "#1F1F1F",
    marginRight: SPACING / 6,
    borderRadius: 4,
    elevation: 5,
    zIndex: 5,
  },
  poster: {
    width: width * 0.3,
    height: width * 0.3 * 1.48,
    marginRight: SPACING,
  },
  movieDetailContainer: {
    padding: SPACING / 6,
  },
  movieTitle: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "RalewaySemiBold",
  },
  movieDetail: {
    fontSize: 12,
    fontFamily: "RalewayLight",
    color: "#e5e5e5",
  },
});
