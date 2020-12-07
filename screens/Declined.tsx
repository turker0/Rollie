import React from "react";
import { StyleSheet, View } from "react-native";
import MovieList from "../components/shared/movielist";

interface Props {}

const Declined = (props: Props) => {
  return (
    <View style={styles.container}>
      <MovieList name="declined" />
    </View>
  );
};

export default Declined;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
