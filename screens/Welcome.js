import React from "react";
import { useSelector } from "react-redux";

import Newcomer from "../components/welcome/newcomer";
import HomeBottomTabs from "../routes/homebottomtabs";

const Welcome = () => {
  const isNew = useSelector((state) => state.isNew);

  if (isNew) {
    return <Newcomer />;
  } else {
    return <HomeBottomTabs />;
  }
};

export default Welcome;
