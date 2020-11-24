import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux/actions";
import { AppLoading } from "expo";
import { FontAwesome } from "@expo/vector-icons";
import Buttons from "./buttons";

const { width } = Dimensions.get("window"),
  SPACING = 30;
const fetchURL = "http://www.omdbapi.com/?t=",
  apiTail = "&apikey=3c88863d";

const BUTTONS = [
  {
    text: "Watched",
    id: "watched",
  },
  {
    text: "Drop",
    id: "declined",
  },
  {
    text: "Later",
    id: "later",
  },
];

export default function CurrentMovie({ title, navigation }) {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState();

  const buttonHandler = (key) => {
    dispatch(actionCreators.addMovie(movie.Title, key));
    dispatch(actionCreators.removeMovie(movie.Title, "current"));
    dispatch(actionCreators.setIsRolled(false));
  };

  useEffect(() => {
    fetch(fetchURL + title + apiTail, {
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
  }, []);

  if (movie) {
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text style={styles.header}>
          <Text style={styles.highlighted}>Current:</Text> {movie.Title}
        </Text>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MoviePage", {
                movie: movie,
              })
            }
          >
            <Image style={styles.image} source={{ uri: movie.Poster }} />
          </TouchableOpacity>
          <View style={styles.detailsContainer}>
            <View>
              <Text style={styles.text}>
                <FontAwesome name="star" size={16} color="#fcf300" />
                {"  "}
                {movie.imdbRating} {"  "}
                {movie.Year} {"  "}
                {movie.Runtime}
              </Text>
              <Text style={styles.text}>{movie.Genre}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "space-evenly" }}>
              {BUTTONS.map((item) => {
                return (
                  <Buttons
                    id={item.id}
                    text={item.text}
                    handler={buttonHandler}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    return <AppLoading />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING,
  },
  header: {
    fontSize: 20,
    fontFamily: "RalewaySemiBold",
    color: "#fafafa",
    marginBottom: SPACING / 3,
  },
  image: {
    width: width * 0.4,
    height: width * 0.4 * 1.48,
    backgroundColor: "gray",
    borderWidth: 3,
    borderRadius: 4,
    borderColor: "#2e2e2e",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: SPACING * 0.5,
    height: width * 0.4 * 1.48,
  },
  text: {
    fontSize: 16,
    fontFamily: "RalewaySemiBold",
    color: "#c2c2c2",
  },
  button: {
    width: "100%",
    height: SPACING * 1.2,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: SPACING / 2,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#2e2e2e",
    backgroundColor: "#e2e2e2",
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "RalewayBold",
    color: "#000",
    marginLeft: SPACING / 4,
    textTransform: "capitalize",
  },
  highlighted: {
    color: "#665DF5",
    fontSize: 19,
  },
});
