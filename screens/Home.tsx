import React, { FC } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Content from "../components/home/content";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  navigation: any;
}

const Home: FC<Props> = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ flex: 1, backgroundColor: "#000" }}
    >
      <LinearGradient
        colors={["#000", "#13112D"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          zIndex: -1,
          elevation: -1,
          height: "100%",
        }}
      />
      <Content navigation={navigation} />
    </ScrollView>
  );
};

export default Home;
