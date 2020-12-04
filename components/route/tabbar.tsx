import React, { FC } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GradientHorizontal from "../shared/gradienthorizontal";
import colors from "../../style/colors";
import fonts from "../../style/fonts";

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
      <GradientHorizontal />
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
                color={isFocused ? colors.purple : colors.gray}
              />
              <Text
                style={[
                  styles.text,
                  isFocused ? { color: colors.purple } : { color: colors.gray },
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
  routesWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.dark,
    marginTop: 1,

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
    fontSize: fonts.text14,
  },
});
