import Svg from "react-native-svg";
import {
  REGISTERUSER,
  EDITUSERBYKEY,
  ADDMOVIE,
  REMOVEMOVIE,
  Movie,
  ActionTypes,
  User,
} from "./types";

const registerUser = (user: User): ActionTypes => {
  return {
    type: REGISTERUSER,
    payload: user,
  };
};

const editUserByKey = (
  load: string | boolean | Svg,
  key: string
): ActionTypes => {
  return {
    type: EDITUSERBYKEY,
    payload: load,
    key: key,
  };
};

const addMovie = (movie: Movie, key: string): ActionTypes => {
  return {
    type: ADDMOVIE,
    payload: movie,
    key: key,
  };
};
const removeMovie = (movie: Movie, key: string): ActionTypes => {
  return {
    type: REMOVEMOVIE,
    payload: movie,
    key: key,
  };
};

const actionCreators = {
  registerUser,
  addMovie,
  removeMovie,
  editUserByKey,
};

export { actionCreators };
