import {
  SET_USER,
  ADD_MOVIE,
  REMOVE_MOVIE,
  SET_ISNEW,
  SET_ISROLLED,
} from "./types";

const setUser = (user, key) => {
  return {
    type: SET_USER,
    payload: user,
    key: key,
  };
};

const addMovie = (movie, key) => {
  return {
    type: ADD_MOVIE,
    payload: movie,
    key: key,
  };
};
const removeMovie = (movie, key) => {
  return {
    type: REMOVE_MOVIE,
    payload: movie,
    key: key,
  };
};

const setIsNew = (value) => {
  return {
    type: SET_ISNEW,
    payload: value,
  };
};

const setIsRolled = (value) => {
  return {
    type: SET_ISROLLED,
    payload: value,
  };
};

const actionCreators = {
  setUser,
  addMovie,
  removeMovie,
  setIsNew,
  setIsRolled,
};

export { actionCreators };
