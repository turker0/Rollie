import { LinearGradient } from "expo-linear-gradient";
import React, { useRef } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Tabbar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

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

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
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
            style={styles.button}
          >
            <Text
              style={[
                styles.text,
                isFocused && {
                  color: "#665DF5",
                  fontFamily: "RalewayBlack",
                  fontSize: 22,
                },
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default Tabbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.95)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 20,
    elevation: 7,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 4,
    zIndex: -1,
    elevation: -1,
  },
  button: {
    width: Dimensions.get("window").width / 3.33,
    alignItems: "center",
    top: 4,
    height: "100%",
    justifyContent: "center",
  },
  text: {
    fontFamily: "RalewayBold",
    fontSize: 20,
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
