import { AppLoading } from "expo";
import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "./screens/Welcome";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import { createStackNavigator } from "@react-navigation/stack";

const store = createStore(reducer);
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
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Welcome" component={Welcome} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
