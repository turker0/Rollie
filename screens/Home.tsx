import React, { FC } from "react";
import Content from "../components/home/content";
import GradientBG from "../components/shared/gradientbg";
import { scrollY } from "../components/route/header";
import { Animated } from "react-native";

interface Props {
  route: any;
}

const Home: FC<Props> = ({}) => {
  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{
        flex: 1,
        backgroundColor: "#000",
      }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
    >
      <GradientBG />
      <Content />
    </Animated.ScrollView>
  );
};

export default Home;
