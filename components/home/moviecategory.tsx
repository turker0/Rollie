import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Movie } from "../../redux/types";
import CategoryItem from "./categoryitem";

const SPACING = 30;

interface Props {
  title: string;
  movies: string[];
  navigation: any;
}

const MovieCategory: FC<Props> = ({ title, movies, navigation }) => {
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
        keyExtractor={(item) => String(item)}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item, index }) => {
          return (
            <CategoryItem title={item} key={index} navigation={navigation} />
          );
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
    fontSize: 20,
    fontFamily: "RalewaySemiBold",
    color: "#fff",
    flex: 1,
  },
  count: {
    fontSize: 20,
    fontFamily: "RalewaySemiBold",
    color: "#c2c2c2",
  },
  contentContainer: {
    paddingHorizontal: SPACING,
  },
  error: {
    fontSize: 16,
    fontFamily: "RalewaySemiBold",
    color: "#c2c2c2",
    borderLeftWidth: 4,
    borderRadius: 2,
    borderColor: "#665DF5",
    marginLeft: SPACING,
    paddingLeft: SPACING / 6 + 5,
  },
});
