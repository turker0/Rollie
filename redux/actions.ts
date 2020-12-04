import {
  REGISTERUSER,
  EDITUSERBYKEY,
  ADDMOVIE,
  REMOVEMOVIE,
  SETCURRENTMOVIE,
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
  load: string | boolean | JSX.Element,
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

const setCurrentMovie = (movie: Movie): ActionTypes => {
  return {
    type: SETCURRENTMOVIE,
    payload: movie,
  };
};

const actionCreators = {
  registerUser,
  addMovie,
  removeMovie,
  editUserByKey,
  setCurrentMovie,
};

export { actionCreators };
