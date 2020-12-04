import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Content from "../components/home/content";
import GradientBG from "../components/shared/gradientbg";

const Home = ({}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ flex: 1, backgroundColor: "#000" }}
    >
      <GradientBG />
      <Content />
    </ScrollView>
  );
};

export default Home;
