import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Watched from "../screens/Watched";
import Later from "../screens/Later";
import Declined from "../screens/Declined";
import Drawer from "../components/route/drawer";

const DrawerStack = createDrawerNavigator();

const HomeDrawer = ({}) => {
  return (
    <DrawerStack.Navigator
      initialRouteName="Home"
      drawerContent={(props) => (
        <Drawer
          navigation={props.navigation}
          selectedRoute={props.state.routeNames[props.state.index]}
        />
      )}
    >
      <DrawerStack.Screen name="Home" component={Home} />
      <DrawerStack.Screen name="Watched" component={Watched} />
      <DrawerStack.Screen name="Later" component={Later} />
      <DrawerStack.Screen name="Declined" component={Declined} />
    </DrawerStack.Navigator>
  );
};

export default HomeDrawer;
