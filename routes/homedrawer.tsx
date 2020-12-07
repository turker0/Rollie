import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Watched from "../screens/Watched";
import Later from "../screens/Later";
import Declined from "../screens/Declined";

const Drawer = createDrawerNavigator();

const HomeDrawer = ({}) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Watched" component={Watched} />
      <Drawer.Screen name="Later" component={Later} />
      <Drawer.Screen name="Declined" component={Declined} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
