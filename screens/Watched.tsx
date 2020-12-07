import React from "react";
import { StyleSheet, View } from "react-native";
import MovieList from "../components/shared/movielist";

interface Props {}

const Watched = (props: Props) => {
  return (
    <View style={styles.container}>
      <MovieList name="watched" />
    </View>
  );
};

export default Watched;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
