import React from "react";
import Newcomer from "../components/welcome/newcomer";
import HomeBottomTabs from "../routes/homebottomtabs";
import { Initial } from "../redux/types";
import { useSelector } from "react-redux";

const Welcome = () => {
  const isNew = useSelector((state: Initial) => state.user.isNew);

  return isNew ? <Newcomer /> : <HomeBottomTabs />;
};

export default Welcome;
