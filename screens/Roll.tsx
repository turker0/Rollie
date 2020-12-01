import React, { FC, useEffect, useState } from "react";
import { Animated, StyleSheet } from "react-native";

import full from "../database/full.json";
import { useSelector } from "react-redux";
import RolledMovie from "../components/roll/rolledmovie";
import Rolling from "../components/roll/rolling";
import { Easing } from "react-native-reanimated";
import { Movie } from "../redux/types";

const fetchURL = "http://www.omdbapi.com/?t=",
  apiTail = "&apikey=3c88863d";
const SPACING = 30;

interface Props {
  navigation: any;
}

const Roll: FC<Props> = ({ navigation }) => {
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const movies = useSelector((state) => state.movies);
  const [movie, setMovie] = useState<Movie>({});
  const svganim = new Animated.Value(0);

  const roll = () => {
    if (movies.current.length === 0) {
      let fitlered = full.filter((item) => !movies.watched.includes(item));
      let mov = fitlered[Math.floor(Math.random() * fitlered.length)];

      Animated.timing(svganim, {
        toValue: 1,
        duration: 444,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        fetch(fetchURL + mov + apiTail, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            setMovie(res);
          })
          .catch((err) => console.log(err));
      });
    }
  };

  useEffect(() => {
    if (movie) {
      setIsFetched(true);
    }
  }, [movie]);

  if (!isFetched) {
    return <Rolling roll={roll} svganim={svganim} />;
  } else {
    return (
      <RolledMovie
        setIsFetched={setIsFetched}
        movie={movie}
        roll={roll}
        navigation={navigation}
      />
    );
  }
};

export default Roll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontFamily: "RalewayBlack",
    marginBottom: SPACING / 2,
    letterSpacing: 0.5,
    paddingTop: SPACING,
  },
  hightlighted: {
    color: "#665DF5",
  },
});
