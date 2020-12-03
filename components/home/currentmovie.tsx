import React, { FC, useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux/actions";
import { AppLoading } from "expo";
import { FontAwesome } from "@expo/vector-icons";
import Buttons from "./buttons";
import { LinearGradient } from "expo-linear-gradient";
import { Movie } from "../../redux/types";

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

interface Props {
  current: Movie;
  navigation: any;
}

const CurrentMovie: FC<Props> = ({ current, navigation }) => {
  const dispatch = useDispatch();

  const buttonHandler = (key: string) => {
    dispatch(actionCreators.addMovie(current, key));
    dispatch(actionCreators.setCurrentMovie({}));
    dispatch(actionCreators.editUserByKey(false, "isRolled"));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        <Text style={styles.highlighted}>Current:</Text> {current.Title}
      </Text>
      <View style={styles.contentContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("MoviePage", {
              movie: current,
            })
          }
          style={{
            padding: 2,
          }}
        >
          <LinearGradient
            colors={["#e76f51", "#2a9d8f"]}
            style={styles.gradient}
          />
          <Image style={styles.image} source={{ uri: current.Poster }} />
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.text}>
              <FontAwesome name="star" size={16} color="#fcf300" />
              {"  "}
              {current.imdbRating} {"  "}
              {current.Year} {"  "}
              {current.Runtime}
            </Text>
            <Text style={styles.text}>{current.Genre}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: "space-evenly" }}>
            {BUTTONS.map((item) => {
              return (
                <Buttons
                  key={item.id}
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
};

export default CurrentMovie;

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
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
    elevation: -1,
    borderRadius: 4,
  },
  image: {
    width: width * 0.4,
    height: width * 0.4 * 1.48,
    backgroundColor: "gray",
    borderRadius: 4,
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
