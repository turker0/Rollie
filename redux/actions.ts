import {
  SETUSER,
  EDITUSERBYKEY,
  ADDMOVIE,
  REMOVEMOVIE,
  SETCURRENTMOVIE,
  Movie,
  ActionTypes,
  User,
} from "./types";

const setUser = (user: User): ActionTypes => {
  return {
    type: SETUSER,
    payload: user,
  };
};

const editUserByKey = (
  load: string | boolean | number,
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
  setUser,
  addMovie,
  removeMovie,
  editUserByKey,
  setCurrentMovie,
};

export { actionCreators };
