import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import MoviePage from "../screens/MoviePage";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function HomeStack({}) {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Home"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MoviePage" component={MoviePage} />
    </Stack.Navigator>
  );
}
