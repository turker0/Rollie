import React from "react";
import { Dimensions, StyleSheet, Text, View, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MovieCategory from "../components/moviecategory";

import test from "../database/test.json";

const { width, height } = Dimensions.get("window");
const SPACING = 30;

export default function Home({ navigation, route }) {
  const { top10 } = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <Text style={styles.title}>Rollie</Text>
        <MovieCategory
          title="Your last 10 movies"
          movies={top10}
          navigation={navigation}
        />
        <MovieCategory
          title="I'll watch later"
          movies={top10}
          navigation={navigation}
        />
        <MovieCategory
          title="Upcoming movies"
          movies={top10}
          navigation={navigation}
        />
        <MovieCategory
          title="Movies you have declined"
          movies={top10}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
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
  header: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "RalewaySemiBold",
    letterSpacing: 1,
  },
});
