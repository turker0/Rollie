import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeBottomTabs from "./routes/homebottomtabs";
import WelcomeRoute from "./routes/welcomeroute";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://192.168.1.6:8080/graphql",
  cache: new InMemoryCache(),
});

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

  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    console.log("xddd");
    checkIsNew();
  }, []);

  const checkIsNew = () => {
    console.log("checking...");
    setIsNew(false);
  };

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="Welcome"
            >
              <Stack.Screen name="Welcome" component={WelcomeRoute} />
              <Stack.Screen name="Home" component={HomeBottomTabs} />
            </Stack.Navigator>
          </NavigationContainer>
        </ApolloProvider>
      </Provider>
    );
  }
}
