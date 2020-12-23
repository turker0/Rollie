import React from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import reduxStore from "./redux/store";
import RootStack from "./routes/rootstack";
import { APOLLO_CLIENT_URI } from "@env";

const client = new ApolloClient({
  uri: String(APOLLO_CLIENT_URI) + "/graphql",
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default function App() {
  const [loaded, error] = useFonts({
    RalewayBlack: require("./assets/fonts/Raleway-Black.ttf"),
    RalewayBold: require("./assets/fonts/Raleway-Bold.ttf"),
    RalewayLight: require("./assets/fonts/Raleway-Light.ttf"),
    RalewayMedium: require("./assets/fonts/Raleway-Medium.ttf"),
    RalewayRegular: require("./assets/fonts/Raleway-Regular.ttf"),
    RalewaySemiBold: require("./assets/fonts/Raleway-SemiBold.ttf"),
  });

  const { store, persistor } = reduxStore();

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={client}>
            <RootStack />
          </ApolloProvider>
        </PersistGate>
      </Provider>
    );
  }
}
