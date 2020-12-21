import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Roll from "../screens/Roll";
import Profile from "../screens/Profile";
import HomeStack from "./homestack";
import Tabbar from "../components/route/tabbar";

const Tab = createBottomTabNavigator();

export default function HomeBottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      tabBar={(props) => <Tabbar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Roll" component={Roll} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
