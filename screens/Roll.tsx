import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Text, View } from "react-native";

import full from "../database/full.json";
import { useSelector } from "react-redux";
import RolledMovie from "../components/roll/rolledmovie";
import Rolling from "../components/roll/rolling";
import { Initial, Movie, Movies } from "../redux/types";
import fonts from "../style/fonts";
import colors from "../style/colors";
import GradientBG from "../components/shared/gradientbg";

const fetchURL = "http://www.omdbapi.com/?t=",
  apiTail = "&apikey=3c88863d";

const Roll = ({}) => {
  const isRolled: boolean = useSelector(
    (state: Initial) => state.user.isRolled
  );
  const svganim = new Animated.Value(0);
  const [movie, setMovie] = useState<Movie>({});
  const movies: Movies = useSelector((state: Initial) => state.movies);
  const [rolling, setRolling] = useState<boolean>(false);

  useEffect(() => {
    setRolling(false);
  }, [movie.Title]);

  useEffect(() => {
    if (rolling) {
      fetchMovie();
    }
  }, [rolling]);

  const roll = () => {
    if (!rolling) {
      Animated.timing(svganim, {
        toValue: 4,
        duration: 600,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => setRolling(true));
    }
  };

  const fetchMovie = () => {
    let x: any = [];
    movies.watched.forEach((item) => x.push(item.Title));
    let filtered: String[] = full.filter((item) => !x.includes(item));
    let mov = filtered[Math.floor(Math.random() * filtered.length)];

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
  };

  if (isRolled) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 30,
        }}
      >
        <GradientBG />
        <Text
          style={{
            fontSize: fonts.text24,
            fontFamily: "RalewayBold",
            color: colors.pink,
            textAlign: "center",
          }}
        >
          You have already rolled a movie.{"\n\n"}
          <Text style={{ letterSpacing: 1 }}>Enjoy!</Text>
        </Text>
      </View>
    );
  }

  if (movie.Title !== undefined) {
    return (
      <RolledMovie
        movie={movie}
        roll={roll}
        setMovie={setMovie}
        rolling={rolling}
      />
    );
  }

  return <Rolling roll={roll} svganim={svganim} />;
};

export default Roll;
