import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const SPACING = 30;
const fetchURL = "http://www.omdbapi.com/?t=",
  apiTail = "&apikey=3c88863d";

export default function CategoryItem({ title, navigation }) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = () => {
    fetch(fetchURL + title + apiTail, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("MoviePage", {
          movie: movie,
        })
      }
      style={styles.itemContainer}
    >
      <Image
        source={{
          uri: movie.Poster,
        }}
        style={styles.poster}
        resizeMode="stretch"
      />

      <View style={styles.movieDetailContainer}>
        <Text style={styles.movieTitle} numberOfLines={2}>
          {movie.Title}
        </Text>
        <View style={styles.ratingWrapper}>
          <FontAwesome name="star" size={14} color="yellow" />
          <Text style={[styles.movieText1, { marginLeft: 5 }]}>
            {movie.imdbRating} {"  "} {movie.Year}
          </Text>
        </View>
        <Text style={styles.movieText2} numberOfLines={2}>
          {movie.Runtime} {"  "} {movie.Genre}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: width * 0.35,
    height: width * 0.35 * 1.48 + 100,
    backgroundColor: "#1F1F1F",
    marginRight: SPACING / 4,
    borderRadius: 4,
    elevation: 5,
    zIndex: 5,
  },
  poster: {
    width: width * 0.35,
    height: width * 0.35 * 1.48,
    marginRight: SPACING,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  placeholder: {
    width: width * 0.35,
    height: width * 0.35 * 1.48,
    marginRight: SPACING,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: "#fff",
  },
  movieDetailContainer: {
    paddingVertical: SPACING / 6,
    paddingHorizontal: SPACING / 3,
  },
  movieTitle: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "RalewayMedium",
  },
  movieText1: {
    fontSize: 12,
    fontFamily: "RalewayRegular",
    color: "#fafafa",
  },
  movieText2: {
    fontSize: 12,
    fontFamily: "RalewayLight",
    color: "#e5e5e5",
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SPACING / 6,
    marginBottom: SPACING / 12,
  },
});