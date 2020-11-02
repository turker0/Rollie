import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Back from "../components/back";
import RollStats from "../components/rollstats";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import Animated, { Easing } from "react-native-reanimated";
import MaskedView from "@react-native-community/masked-view";

const { width, height } = Dimensions.get("window");
const DEFAULT_SPACING = 20;

export default function Roll({ navigation }) {
  const [isFetched, setIsFetched] = useState(true);

  const circle = new Animated.Value(1);
  const opacity1 = new Animated.Value(0);
  const opacity2 = new Animated.Value(0);
  const opacity3 = new Animated.Value(0);

  useEffect(() => {
    Animated.block([
      Animated.timing(circle, {
        toValue: height * 2,
        duration: 3333,
        easing: Easing.linear,
      }).start(),
      Animated.timing(opacity1, {
        toValue: 1,
        duration: 999,
        easing: Easing.linear,
      }).start(),
      Animated.timing(opacity2, {
        toValue: 1,
        duration: 999,
        delay: 666,
        easing: Easing.linear,
      }).start(),
      Animated.timing(opacity3, {
        toValue: 1,
        duration: 999,
        delay: 999,
        easing: Easing.linear,
      }).start(),
    ]);
  });

  if (isFetched) {
    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <Back navigation={navigation} />
        <View style={styles.innerContainer}>
          <View style={styles.titleWrapper}>
            <Animated.Text style={[styles.title, { opacity: opacity1 }]}>
              The Shawshank Redemption (1994)
            </Animated.Text>
            <View style={styles.starWrapper}>
              <FontAwesome name="star-half-full" size={20} color="#7696B0" />
              <Text style={styles.star}>9.4</Text>
            </View>
          </View>
          <View style={styles.rollWrapper}>
            <MaskedView
              maskElement={
                <View
                  style={{
                    backgroundColor: "transparent",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Animated.View
                    style={[styles.masked, { width: circle, height: circle }]}
                  />
                </View>
              }
            >
              <Animated.Image
                style={[styles.image, { opacity: opacity1 }]}
                source={{
                  uri:
                    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
                }}
              />
            </MaskedView>
            <View style={styles.detailsWrapper}>
              <RollStats
                text="175 min"
                icon={<MaterialIcons name="timer" size={20} color="#7696B0" />}
                opacity1={opacity1}
                opacity2={opacity2}
              />
              <RollStats
                text="Crime, Drama"
                icon={
                  <MaterialCommunityIcons
                    name="arrange-send-to-back"
                    size={18}
                    color="#7696B0"
                  />
                }
                opacity1={opacity1}
                opacity2={opacity2}
              />
              <RollStats
                text="Francis Ford Coppola"
                icon={
                  <MaterialIcons name="camera-roll" size={18} color="#7696B0" />
                }
                opacity1={opacity1}
                opacity2={opacity2}
              />
              <RollStats
                text="Mario Puzo (screenplay by), Francis Ford Coppola
              (screenplay by), Mario Puzo (based on the novel by)"
                icon={
                  <MaterialCommunityIcons
                    name="typewriter"
                    size={18}
                    color="#7696B0"
                  />
                }
                opacity1={opacity1}
                opacity2={opacity2}
              />
              <RollStats
                text="Won 3 Oscars. Another 26 wins & 30 nominations.Awards: Won
              3 Oscars. Another 26 wins & 30 nominations."
                icon={<Feather name="award" size={18} color="#7696B0" />}
                opacity1={opacity1}
                opacity2={opacity2}
              />
            </View>
          </View>
          <Animated.View style={[styles.detailWrapper, { opacity: opacity3 }]}>
            <MaterialCommunityIcons
              name="scatter-plot"
              size={18}
              color="#7696B0"
            />
            <Text style={styles.detail} numberOfLines={6}>
              Two imprisoned men bond over a number of years, finding solace and
              eventual redemption through acts of common decency.
            </Text>
          </Animated.View>
          <Animated.View style={[styles.buttonWrapper, { opacity: opacity3 }]}>
            <TouchableOpacity style={styles.buttonWrap}>
              <Text style={styles.button}>no next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonWrap}>
              <Text style={styles.button}>i'll watch</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09141C",
        }}
      >
        <ActivityIndicator size="large" color="#7696B0" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09141C",
    padding: 20,
  },
  innerContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    color: "#EDF1F5",
    fontFamily: "RalewaySemiBold",
    letterSpacing: 0.3,
    width: "80%",
  },
  image: {
    width: width * 0.5,
    height: width * 0.5 * 1.48,
  },
  details: {
    fontSize: 14,
    color: "#DAE0E6",
    fontFamily: "RalewayRegular",
    textAlign: "center",
  },
  buttonWrapper: {
    flexDirection: "row",
    width: width - 40,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  button: {
    fontSize: 18,
    color: "#EDF1F5",
    fontFamily: "RalewaySemiBold",
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: "#172B3B",
  },
  detailsWrapper: {
    flex: 1,
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  rollWrapper: {
    width: width - 40,
    flexDirection: "row",
  },
  titleWrapper: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
    marginBottom: 10,
  },
  starWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    marginLeft: 7.5,
    fontSize: 18,
    color: "#EDF1F5",
    fontFamily: "RalewaySemiBold",
  },
  detailWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  detail: {
    flex: 1,
    marginLeft: 5,
    fontSize: 14,
    color: "#EDF1F5",
    fontFamily: "RalewayRegular",
  },
  buttonWrap: {
    paddingVertical: DEFAULT_SPACING * 0.3,
    paddingHorizontal: DEFAULT_SPACING * 0.6,
    backgroundColor: "#172B3B",
    flexDirection: "row",
    alignSelf: "flex-start",
    elevation: 5,
    zIndex: 5,
  },
  masked: {
    borderRadius: (width * 0.5 * 1.48) / 2,
    backgroundColor: "red",
  },
});
