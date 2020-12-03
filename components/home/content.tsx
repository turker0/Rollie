import React, { FC } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Roll from "./roll";
import CurrentMovie from "./currentmovie";
import MovieCategory from "./moviecategory";
import { Initial, Movies } from "../../redux/types";

const SPACING = 30;

interface Props {
  navigation: any;
}

const Content: FC<Props> = ({ navigation }) => {
  const isRolled: boolean = useSelector(
    (state: Initial) => state.user.isRolled
  );
  const movies: Movies = useSelector((state: Initial) => state.movies);

  const roll = () => {
    navigation.navigate("Roll");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Text style={styles.title}>Rollie</Text>
      {!isRolled ? (
        <Roll roll={roll} />
      ) : (
        <CurrentMovie current={movies.current} navigation={navigation} />
      )}
      <MovieCategory
        title="Your last movies"
        movies={movies.watched
          .reverse()
          .filter((_: any, index: number) => index < 10)}
        navigation={navigation}
      />
      <MovieCategory
        title="I'll watch later"
        movies={movies.later.reverse()}
        navigation={navigation}
      />
      <MovieCategory
        title="Movies you have declined"
        movies={movies.declined.reverse()}
        navigation={navigation}
      />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: SPACING / 2,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontFamily: "RalewayBlack",
    letterSpacing: 1,
    paddingTop: SPACING * 2,
    paddingLeft: SPACING,
  },
});
