import { AppLoading } from "expo";
import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Welcome from "./screens/Welcome";
import Roll from "./screens/Roll";

const Stack = createStackNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    RalewayBlack: require("./assets/fonts/Raleway-Black.ttf"),
    RalewayBold: require("./assets/fonts/Raleway-Bold.ttf"),
    RalewayLight: require("./assets/fonts/Raleway-Light.ttf"),
    RalewayMedium: require("./assets/fonts/Raleway-Medium.ttf"),
    RalewayRegular: require("./assets/fonts/Raleway-Regular.ttf"),
    RalewaySemiBold: require("./assets/fonts/Raleway-SemiBold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="none"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Roll" component={Roll} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
