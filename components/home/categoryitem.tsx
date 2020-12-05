import React, { FC } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { Movie } from "../../redux/types";
import { useNavigation } from "@react-navigation/native";
import colors from "../../style/colors";
import fonts from "../../style/fonts";

const { width } = Dimensions.get("window");
const SPACING = 30;

interface Props {
  movie: Movie;
}

const CategoryItem: FC<Props> = ({ movie }) => {
  const navigation = useNavigation();
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
          {movie.Title + "\n"}
        </Text>
        <View style={styles.ratingWrapper}>
          <FontAwesome name="star" size={14} color={colors.yellow} />
          <Text style={[styles.movieText1, { marginLeft: 5 }]}>
            {movie.imdbRating} {"  "} {movie.Year}
          </Text>
        </View>
        <Text style={styles.movieText2} numberOfLines={2}>
          {movie.Runtime} {"  "} {movie.Genre + "\n"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: width * 0.35,
    height: "auto",
    backgroundColor: colors.black,
    marginRight: SPACING / 4,
    paddingVertical: 5,
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
    overflow: "hidden",
  },
  poster: {
    width: width * 0.35,
    height: width * 0.35 * 1.48,
    marginRight: SPACING,
  },
  movieDetailContainer: {
    paddingVertical: SPACING / 6,
    paddingHorizontal: SPACING / 3,
    flex: 1,
  },
  movieTitle: {
    fontSize: fonts.text16,
    color: colors.white,
    fontFamily: "RalewayMedium",
  },
  movieText1: {
    fontSize: fonts.text14,
    fontFamily: "RalewayRegular",
    color: colors.white,
  },
  movieText2: {
    fontSize: fonts.text12,
    fontFamily: "RalewayLight",
    color: colors.gray,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SPACING / 6,
    marginBottom: SPACING / 12,
  },
});
