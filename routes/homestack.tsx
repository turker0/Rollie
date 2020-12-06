import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import MoviePage from "../screens/MoviePage";
import HomeDrawer from "./homedrawer";
import Header from "../components/route/header";

const Stack = createStackNavigator();

export default function HomeStack({}) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeDrawer}
        options={{
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="MoviePage"
        component={MoviePage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
