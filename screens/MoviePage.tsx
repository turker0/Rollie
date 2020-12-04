import React, { FC } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import MoviePageText from "../components/roll/moviepagetext";
import colors from "../style/colors";
import fonts from "../style/fonts";

const SPACING = 30;
const { width, height } = Dimensions.get("window");

interface Props {
  route: any;
}

const MoviePage: FC<Props> = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: movie.Poster }}
        style={styles.image}
        resizeMode="cover"
        blurRadius={0.25}
      />
      <View style={styles.blacked} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: "4%" }}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{movie.Title}</Text>
          <View style={styles.rowLine}>
            <FontAwesome name="star" size={24} color={colors.yellow} />
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
      {/* <View style={styles.buttonContainer}>
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
      </View> */}
    </View>
  );
};

export default MoviePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "4%",
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
    fontSize: fonts.text32,
    color: colors.white,
    fontFamily: "RalewayBlack",
    marginBottom: SPACING / 2,
    letterSpacing: 0.5,
    paddingTop: SPACING * 3,
  },
  details: {
    fontSize: fonts.text20,
    fontFamily: "RalewaySemiBold",
    color: colors.white,
    lineHeight: SPACING * 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.dark,
    paddingVertical: SPACING / 3,
  },
});
