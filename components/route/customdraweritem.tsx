import { DrawerItem } from "@react-navigation/drawer";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import colors from "../../style/colors";
import fonts from "../../style/fonts";
import { Feather } from "@expo/vector-icons";

interface Props {
  label: string;
  to: string;
  icon: string;
  onRoutePress: (to: string) => void;
  selectedRoute: string;
}

const CustomDrawerItem: FC<Props> = ({
  label,
  to,
  icon,
  onRoutePress,
  selectedRoute,
}) => {
  return (
    <DrawerItem
      label={label}
      to={to}
      onPress={() => onRoutePress(to)}
      style={{
        justifyContent: "center",
      }}
      labelStyle={[
        styles.item,
        selectedRoute === to ? { color: colors.pink } : { color: colors.gray },
      ]}
      icon={() => (
        <Feather
          name={icon}
          size={20}
          color={selectedRoute === to ? colors.pink : colors.gray}
        />
      )}
    />
  );
};

export default CustomDrawerItem;

const styles = StyleSheet.create({
  item: {
    fontSize: fonts.text20,
    fontFamily: "RalewayMedium",
    letterSpacing: 1,
    marginLeft: -20,
  },
});
