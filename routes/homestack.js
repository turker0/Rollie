import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import MoviePage from "../screens/MoviePage";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function HomeStack({ route, navigation }) {
  const { top10 } = route.params;

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Home"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        initialParams={{
          top10: top10,
        }}
      />
      <Stack.Screen name="MoviePage" component={MoviePage} />
    </Stack.Navigator>
  );
}
