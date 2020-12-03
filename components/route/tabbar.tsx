import { LinearGradient } from "expo-linear-gradient";
import React, { FC } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const totalWidth = Dimensions.get("window").width;
const ICONS = ["home-circle", "movie-roll", "google-analytics"];

interface Props {
  state: any;
  descriptors: any;
  navigation: any;
}

const Tabbar: FC<Props> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#e76f51", "#2a9d8f"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
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
    elevation: 7,
    bottom: 0,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 60,
    zIndex: -1,
    elevation: -1,
  },
  routesWrapper: {
    flex: 1,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.9)",
    marginTop: 1,
    marginLeft: 1,
    marginRight: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
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
