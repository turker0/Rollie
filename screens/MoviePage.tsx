import React, { FC } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import MoviePageText from "../components/shared/moviepagetext";
import colors from "../style/colors";
import fonts from "../style/fonts";
import Buttons from "../components/roll/buttons";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { actionCreators } from "../redux/actions";
import BackButton from "../components/shared/backbutton";
import MovieStatText from "../components/shared/moviestattext";

const SPACING = 30;
const { width, height } = Dimensions.get("window");

interface Props {
  route: any;
  type?: string;
}

const BUTTONS = [
  {
    name: "x",
    id: "declined",
    text: "next",
  },
  {
    name: "check",
    id: "watched",
    text: "watched",
  },
  {
    name: "clock",
    id: "later",
    text: "later",
  },
];

const MoviePage: FC<Props> = ({ route }) => {
  const { movie, type } = route.params;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handler = (key: string) => {
    dispatch(actionCreators.addMovie(movie, key));
    dispatch(actionCreators.removeMovie(movie, type));
    navigation.goBack();
  };

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
          <BackButton title={movie.Title} />
          <Text style={styles.title}>{movie.Title}</Text>
          <View style={styles.statsBG}>
            <View style={styles.rowLine}>
              <MovieStatText icon="star" text={movie.imdbRating} margin />
              <MovieStatText icon="calendar" text={movie.Year} margin />
              <MovieStatText icon="clock-o" text={movie.Runtime} />
            </View>
            <View style={styles.rowLine}>
              <MovieStatText icon="filter" text={movie.Genre} margin />
              <MovieStatText icon="globe" text={movie.Country} margin />
              <MovieStatText icon="comments" text={movie.Language} />
            </View>
          </View>
          <MoviePageText text={movie.Plot} title="Plot" />
          <MoviePageText text={movie.Director} title="Director" />
          <MoviePageText text={movie.Writer} title="Writer" />
          <MoviePageText text={movie.Actors} title="Actors" />
          <MoviePageText text={movie.Awards} title="Awards" />
          <MoviePageText text={movie.Production} title="Production" />
        </View>
      </ScrollView>
      {type && (
        <View style={styles.buttonContainer}>
          <FlatList
            data={BUTTONS.filter((item) => item.id !== type)}
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <Buttons
                  name={item.name}
                  text={item.text}
                  id={item.id}
                  handler={handler}
                  border={index}
                />
              );
            }}
          />
        </View>
      )}
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
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: SPACING / 6,
  },
  details: {
    fontSize: fonts.text20,
    fontFamily: "RalewaySemiBold",
    color: colors.white,
    lineHeight: SPACING * 1,
  },
  statsBG: {
    paddingVertical: SPACING / 3,
    paddingHorizontal: "4%",
    marginBottom: SPACING,
    backgroundColor: "rgba(0,0,0,.85)",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    zIndex: 7,
    elevation: 7,
  },
  title: {
    fontSize: fonts.text32,
    color: colors.pink,
    fontFamily: "RalewayBlack",
    paddingHorizontal: "4%",
    letterSpacing: 0.5,
    marginVertical: 15,
    paddingVertical: 10,
    backgroundColor: "rgba(0,0,0,.85)",
    borderRadius: 4,
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
