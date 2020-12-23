import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/actions";
import { resetState } from "../redux/reducers";
import { User } from "../redux/types";

interface Props {}

const Logout = (props: Props) => {
  const dispatch = useDispatch();
  const user = useSelector((state: User) => state);
  useEffect(() => {
    dispatch(actionCreators.setUser(resetState));
  }, []);

  return <View />;
};

export default Logout;

const styles = StyleSheet.create({});
