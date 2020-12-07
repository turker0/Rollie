import { useIsDrawerOpen } from "@react-navigation/drawer";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { animateHeader } from "../components/route/header";

interface Props {}

const Watched = (props: Props) => {
  const isDrawerOpen = useIsDrawerOpen();
  useEffect(() => {
    if (!isDrawerOpen) {
      animateHeader(0);
    }
  }, [isDrawerOpen]);
  return (
    <View>
      <Text>Watched</Text>
    </View>
  );
};

export default Watched;

const styles = StyleSheet.create({});
