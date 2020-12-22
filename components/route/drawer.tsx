import { DrawerContentScrollView } from "@react-navigation/drawer";
import React, { FC, useCallback } from "react";
import { Animated, StyleSheet, View } from "react-native";
import GradientBG from "../shared/gradientbg";
import CustomDrawerItem from "./customdraweritem";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

const drawerTabs = [
  {
    label: "Rollie",
    to: "Home",
    icon: "menu",
  },
  {
    label: "Watched Movies",
    to: "Watched",
    icon: "check",
  },
  {
    label: "Declined Movies",
    to: "Declined",
    icon: "x",
  },
  {
    label: "Later Movies",
    to: "Later",
    icon: "clock",
  },
  {
    label: "Logout",
    to: "Logout",
    icon: "log-out",
  },
];

interface Props {
  navigation: DrawerNavigationHelpers;
  selectedRoute: string;
}

const Drawer: FC<Props> = ({ navigation, selectedRoute }) => {
  const onRoutePress = useCallback((route: string) => {
    navigation.navigate(route);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GradientBG />
      <Animated.View style={styles.container}>
        <DrawerContentScrollView
          style={{ flex: 1, paddingTop: 90, paddingBottom: 60 }}
          bounces={false}
          contentContainerStyle={{
            flex: 1,
          }}
        >
          {drawerTabs.map((item) => (
            <CustomDrawerItem
              to={item.to}
              label={item.label}
              key={item.label}
              icon={item.icon}
              onRoutePress={onRoutePress}
              selectedRoute={selectedRoute}
            />
          ))}
        </DrawerContentScrollView>
      </Animated.View>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
