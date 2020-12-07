import { useIsDrawerOpen } from "@react-navigation/drawer";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { animateHeader } from "../components/route/header";

interface Props {}

const Declined = (props: Props) => {
  const isDrawerOpen = useIsDrawerOpen();
  useEffect(() => {
    if (!isDrawerOpen) {
      animateHeader(0);
    }
  }, [isDrawerOpen]);
  return (
    <View>
      <Text>Declined</Text>
    </View>
  );
};

export default Declined;

const styles = StyleSheet.create({});
