import React, { FC } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Initial, Movie } from "../../redux/types";
import { useSelector } from "react-redux";
import fonts from "../../style/fonts";
import colors from "../../style/colors";
import GradientColored from "./gradientcolored";
import { useNavigation } from "@react-navigation/native";
import GradientBG from "./gradientbg";
import { scrollY } from "../route/header";

const { width } = Dimensions.get("window");

interface Props {
  name: string;
}

const MovieList: FC<Props> = ({ name }) => {
  const movies = useSelector((state: Initial) => state.movies[name]);
  const navigation = useNavigation();
  const openMovie = (movie: Movie) => {
    navigation.navigate("MoviePage", {
      movie: movie,
    });
  };

  return (
    <View style={styles.container}>
      <GradientBG />

      {movies.length > 0 ? (
        <Animated.FlatList
          data={movies}
          keyExtractor={(movie: Movie, index: number) =>
            movie.Title + String(index)
          }
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
            paddingVertical: 90,
            paddingHorizontal: 15,
          }}
          numColumns={2}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          ListHeaderComponent={() => (
            <Text style={styles.title}>
              {name} Movies: {movies.length}
            </Text>
          )}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={() => openMovie(item)}>
                <View style={styles.itemContainer}>
                  <GradientColored />
                  <Text style={styles.number}>{index + 1}</Text>
                  <Image style={styles.image} source={{ uri: item.Poster }} />
                  <Text style={styles.text} numberOfLines={2}>
                    {item.Title + "\n"}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <Text style={styles.error}>No movie record.</Text>
      )}
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  itemContainer: {
    width: (width - 90) / 2,
    padding: 2,
    marginHorizontal: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: (width - 90) / 2 - 4,
    height: ((width - 90) / 2 - 4) * 1.48,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  text: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: fonts.text16,
    fontFamily: "RalewayBold",
    color: colors.pink,
    textAlign: "center",
    textTransform: "capitalize",
    letterSpacing: 0.25,
    backgroundColor: colors.dark,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  number: {
    position: "absolute",
    top: 2,
    right: 2,
    backgroundColor: colors.pink,
    zIndex: 100,
    elevation: 100,
    paddingHorizontal: "5%",
    paddingTop: "2.5%",
    paddingBottom: "5%",
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    fontSize: fonts.text12,
    fontFamily: "RalewayBold",
    color: colors.white,
  },
  error: {
    fontSize: fonts.text20,
    textAlign: "center",
    fontFamily: "RalewayBold",
    color: colors.red,
    paddingTop: 90,
  },
  title: {
    fontSize: fonts.text24,
    fontFamily: "RalewaySemiBold",
    color: colors.pink,
    alignSelf: "flex-start",
    textTransform: "capitalize",
    paddingBottom: 5,
    marginLeft: 15,
    marginBottom: 15,
    borderBottomWidth: 3,
    borderColor: colors.pink,
  },
});
