import { LinearGradient } from "expo-linear-gradient";
import React, { FC, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const totalWidth = Dimensions.get("window").width;
const ICONS = ["home-circle", "movie-roll", "google-analytics"];

interface Props {
  state: any;
  descriptors: any;
  navigation: any;
}

const Tabbar: FC<Props> = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const [translateValue] = useState(new Animated.Value(0));

  const tabWidth = totalWidth / state.routes.length;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#e76f51", "#2a9d8f"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      />

      <Animated.View
        style={[styles.slider, { transform: [{ translateX: translateValue }] }]}
      />
      <View style={styles.routesWrapper}>
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            // Animated.spring(translateValue, {
            //   //toValue: index * tabWidth,
            //   //velocity: 10,
            //   //useNativeDriver: true,
            // }).start(() => console.log("sa"));

            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                styles.button,
                isFocused && {
                  transform: [{ scale: 1.1 }],
                },
              ]}
            >
              <MaterialCommunityIcons
                name={ICONS[index]}
                size={18}
                color={isFocused ? "#665DF5" : "#707070"}
              />
              <Text
                style={[
                  styles.text,
                  isFocused ? { color: "#665DF5" } : { color: "#707070" },
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  container: {
    width: totalWidth,
    height: 60,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    position: "absolute",
    bottom: 0,
    elevation: 10,
    // elevation: 4,
    // shadowOpacity: 0.29,
    // shadowRadius: 20,
    // elevation: 7,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 60,
    zIndex: -1,
    elevation: -1,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  routesWrapper: {
    flex: 1,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    flexDirection: "row",
    backgroundColor: "#000",
    marginTop: 3,
    marginLeft: 2,
    marginRight: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  slider: {
    width: 50,
    height: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    borderRadius: 10,
    zIndex: 5,
    elevation: 5,
  },

  button: {
    width: totalWidth / 3.33,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "RalewayBold",
    fontSize: 14,
    color: "#707070",
  },
});

// tabBarOptions={{
//   activeTintColor: "#000",
//   inactiveTintColor: "#fff",
//   activeBackgroundColor: "#fff",
//   inactiveBackgroundColor: "#000",
//   labelStyle: {
//     fontSize: 18,
//     fontFamily: "RalewayBlack",
//     borderBottomWidth: 3,
//     borderColor: "#000",
//     height: 40,
//     textAlignVertical: "center",
//   },
//   style: {
//     height: 50,
//     borderTopWidth: 0,
//     elevation: 5,
//     zIndex: 5,
//   },
//   tabStyle: {
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     borderTopWidth: 5,
//   },
// }}
