import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useSelector } from "react-redux";
import { User } from "../redux/types";
import Login from "../screens/Login";
import HomeBottomTabs from "./homebottomtabs";
import WelcomeRoute from "./welcomeroute";

const Stack = createStackNavigator();

const RootStack = () => {
  const isNew = useSelector((state: User) => state.isNew);
  const isLoggedIn = useSelector((state: User) => state.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={isNew ? "Welcome" : "Home"}
      >
        <Stack.Screen
          name="Welcome"
          component={isNew ? WelcomeRoute : isLoggedIn ? HomeBottomTabs : Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
