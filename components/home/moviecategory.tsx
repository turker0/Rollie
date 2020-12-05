import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Movie } from "../../redux/types";
import colors from "../../style/colors";
import fonts from "../../style/fonts";
import CategoryItem from "./categoryitem";

const SPACING = 30;

interface Props {
  title: string;
  movies: Movie[];
}

const MovieCategory: FC<Props> = ({ title, movies }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.count} numberOfLines={1}>
          {movies.length}
        </Text>
      </View>
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.Title)}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item, index }) => {
          return <CategoryItem movie={item} key={index} />;
        }}
      />
      {1 > movies.length ? (
        <Text style={styles.error}>There's no record.</Text>
      ) : null}
    </View>
  );
};

export default MovieCategory;

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING / 2,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SPACING,
    marginBottom: SPACING / 3,
  },
  title: {
    fontSize: fonts.text20,
    fontFamily: "RalewaySemiBold",
    color: colors.pink,
    flex: 1,
  },
  count: {
    fontSize: fonts.text20,
    fontFamily: "RalewayBold",
    color: colors.white,
  },
  contentContainer: {
    paddingHorizontal: SPACING,
  },
  error: {
    fontSize: fonts.text16,
    fontFamily: "RalewaySemiBold",
    color: colors.gray,
    borderLeftWidth: 4,
    borderRadius: 2,
    borderColor: colors.pink,
    margin: SPACING,
    paddingLeft: SPACING / 6 + 5,
  },
});
