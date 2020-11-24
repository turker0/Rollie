import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Welcomer from "../components/home/welcomer";
import Content from "../components/home/content";

const SPACING = 30;

export default function Home({ navigation }) {
  const isNew = useSelector((state) => state.isNew || false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={{ backgroundColor: "#000" }}
    >
      {isNew ? <Welcomer /> : <Content navigation={navigation} />}
    </ScrollView>
  );
}
