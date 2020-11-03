import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Roll from "../screens/Roll";
import Movies from "../screens/Movies";

const Tab = createBottomTabNavigator();

export default function HomeBottomTabs({ navigation, route }) {
  //const { top10 } = route.params;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#000",
        inactiveTintColor: "#fff",
        activeBackgroundColor: "#fff",
        inactiveBackgroundColor: "#000",
        labelStyle: {
          fontSize: 18,
          fontFamily: "RalewayBlack",
          borderBottomWidth: 3,
          borderColor: "#000",
          height: 40,
          textAlignVertical: "center",
        },
        style: {
          height: 50,
          borderTopWidth: 0,
          elevation: 5,
          zIndex: 5,
        },
        tabStyle: {
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Roll" component={Roll} />
    </Tab.Navigator>
  );
}
