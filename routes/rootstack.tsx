import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useSelector } from "react-redux";
import { Initial } from "../redux/types";
import HomeBottomTabs from "./homebottomtabs";
import WelcomeRoute from "./welcomeroute";

const Stack = createStackNavigator();

const RootStack = () => {
  const isNew = useSelector((state: Initial) => state.user.isNew);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={isNew ? "Welcome" : "Home"}
      >
        <Stack.Screen name="Welcome" component={WelcomeRoute} />
        <Stack.Screen name="Home" component={HomeBottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
