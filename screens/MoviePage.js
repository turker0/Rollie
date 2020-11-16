import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import MoviePageText from "../components/moviepagetext";

const SPACING = 30;
const { width, height } = Dimensions.get("window");

export default function MoviePage({ route, navigation }) {
  const { movie } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <Image
        source={{ uri: movie.Poster }}
        style={styles.image}
        resizeMode="repeat"
        resizeMethod="resize"
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>{movie.Title}</Text>
          <View style={styles.rowLine}>
            <FontAwesome name="star" size={24} color="yellow" />
            <Text style={[styles.details, { marginLeft: 10 }]}>
              {movie.imdbRating} {"   "} {movie.Year} {"   "} {movie.Runtime}
            </Text>
          </View>
          <Text style={[styles.details, { marginBottom: SPACING }]}>
            {movie.Genre} {"   "} {movie.Country} {"   "} Language:{" "}
            {movie.Language}
          </Text>
          <MoviePageText text={movie.Plot} title="Plot" />
          <MoviePageText text={movie.Director} title="Director" />
          <MoviePageText text={movie.Writer} title="Writer" />
          <MoviePageText text={movie.Actors} title="Actors" />
          <MoviePageText text={movie.Awards} title="Awards" />
          <MoviePageText text={movie.Production} title="Production" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: SPACING,
    elevation: 2,
    zIndex: 2,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height,
    opacity: 0.15,
    elevation: 1,
    zIndex: 1,
  },
  rowLine: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING / 6,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontFamily: "RalewayBlack",
    marginBottom: SPACING / 2,
    letterSpacing: 0.5,
    paddingTop: SPACING,
  },
  details: {
    fontSize: 20,
    fontFamily: "RalewaySemiBold",
    color: "#fff",
    lineHeight: SPACING * 1,
  },
  text: {
    fontSize: 16,
    fontFamily: "RalewaySemiBold",
    color: "#fafafa",
    paddingVertical: SPACING / 2,
    lineHeight: SPACING,
    borderTopWidth: 1,
    borderColor: "#fafafa",
  },
});
