import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Newcomer from "../components/welcome/newcomer";
import Top10Selector from "../components/welcome/top10selector";

const Stack = createStackNavigator();
const WelcomeRoute = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Home"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Newcomer" component={Newcomer} />
      <Stack.Screen name="Top10Selector" component={Top10Selector} />
    </Stack.Navigator>
  );
};

export default WelcomeRoute;
