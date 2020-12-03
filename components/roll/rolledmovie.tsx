import React, { FC } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import MoviePageText from "./moviepagetext";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux/actions";
import Buttons from "./buttons";
import { Movie } from "../../redux/types";

const { width, height } = Dimensions.get("window");

const SPACING = 30;

const BUTTONS = [
  {
    text: "plus",
    id: "current",
  },
  {
    text: "x",
    id: "declined",
  },
  {
    text: "check",
    id: "watched",
  },
  {
    text: "clock",
    id: "later",
  },
];

interface Props {
  setIsFetched: (bool: boolean) => void;
  movie: Movie;
  roll: any;
  navigation: any;
}

const RolledMovie: FC<Props> = ({ setIsFetched, movie, roll, navigation }) => {
  const dispatch = useDispatch();

  const handler = (key: string) => {
    if (key === "current") {
      dispatch(actionCreators.setCurrentMovie(movie));
      dispatch(actionCreators.editUserByKey(true, "isRolled"));
      setIsFetched(false);
      navigation.navigate("Home");
    } else {
      dispatch(actionCreators.addMovie(movie, key));
      roll();
    }
  };

  console.log(movie);

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <Image
        source={{ uri: movie.Poster }}
        style={styles.image}
        resizeMode="cover"
        blurRadius={0.25}
      />
      <View style={styles.blacked} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>{movie.Title}</Text>
          <View style={styles.rowLine}>
            <FontAwesome name="star" size={24} color="#fcf300" />
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
      <View style={styles.buttonContainer}>
        <FlatList
          data={BUTTONS}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <Buttons
                text={item.text}
                id={item.id}
                handler={handler}
                border={index}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default RolledMovie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING,
    paddingTop: SPACING,
    paddingBottom: SPACING * 2,
    elevation: 2,
    zIndex: 2,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height,
    //elevation: 1,
    zIndex: 0,
  },
  blacked: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height,
    elevation: 0,
    zIndex: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
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
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: SPACING / 3,
  },

  hightlighted: {
    color: "#665DF5",
  },
});
