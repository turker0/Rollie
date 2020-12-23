import React, { useEffect, useState } from "react";
import { Animated, Easing, Text, View } from "react-native";

import full from "../database/full.json";
import { useSelector } from "react-redux";
import RolledMovie from "../components/roll/rolledmovie";
import Rolling from "../components/roll/rolling";
import { User, Movie, Movies } from "../redux/types";
import fonts from "../style/fonts";
import colors from "../style/colors";
import GradientBG from "../components/shared/gradientbg";
import { useMutation } from "@apollo/react-hooks";
import { update } from "../graphql/queries";
import { FETCH_URI, API_TAIL } from "@env";

const Roll = ({}) => {
  const isRolled: boolean = useSelector((state: User) => state.isRolled);
  const svganim = new Animated.Value(0);
  const [movie, setMovie] = useState<Movie>({});
  const movies: Movies = useSelector((state: User) => state.movies);
  const mail: String = useSelector((state: User) => state.mail);
  const [rolling, setRolling] = useState<boolean>(false);
  const [updateRequest, { data }] = useMutation(update);

  useEffect(() => {
    setRolling(false);
  }, [movie.Title]);

  useEffect(() => {
    if (rolling) {
      fetchMovie();
    }
  }, [rolling]);

  useEffect(() => {
    updateMovie();
  }, [movies]);

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

    fetch(FETCH_URI + mov + API_TAIL, {
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

  async function updateMovie() {
    await updateRequest({
      variables: {
        mail: mail,
        movies: movies,
      },
    });
  }

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
        updateMovie={updateMovie}
      />
    );
  }

  return <Rolling roll={roll} svganim={svganim} />;
};

export default Roll;
