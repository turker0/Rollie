import React, { FC, useEffect } from "react";
import Content from "../components/home/content";
import GradientBG from "../components/shared/gradientbg";
import { animateHeader, scrollY } from "../components/route/header";
import { Animated } from "react-native";
import { useIsDrawerOpen } from "@react-navigation/drawer";

interface Props {
  route: any;
}

const Home: FC<Props> = ({}) => {
  const isDrawerOpen = useIsDrawerOpen();
  useEffect(() => {
    if (!isDrawerOpen) {
      animateHeader(0);
    }
  }, [isDrawerOpen]);
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
