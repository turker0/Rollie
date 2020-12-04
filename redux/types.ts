import Svg from "react-native-svg";

interface User {
  username: string;
  mail: string;
  password: string;
  isNew: boolean;
  isRolled: boolean;
  avatar?: JSX.Element;
}

interface Movie {
  Title?: string;
  Poster?: string;
  imdbRating?: string;
  Year?: string;
  Genre?: string;
  Runtime?: string;
  Plot?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Production?: string;
}
interface Movies {
  [key: string]: any; //
  watched: Movie[];
  later: Movie[];
  declined: Movie[];
  current: {};
}

interface Initial {
  user: User;
  movies: Movies;
}

const REGISTERUSER = "REGISTERUSER";
const EDITUSERBYKEY = "EDITUSERBYKEY";
const ADDMOVIE = "ADDMOVIE";
const REMOVEMOVIE = "REMOVEMOVIE";
const SETCURRENTMOVIE = "SETCURRENTMOVIE";

interface registerUserAction {
  type: typeof REGISTERUSER;
  payload: User;
}

interface editUserByKeyAction {
  type: typeof EDITUSERBYKEY;
  payload: string | boolean | JSX.Element;
  key: string;
}

interface addMovieAction {
  type: typeof ADDMOVIE;
  payload: Movie;
  key: string;
}

interface removeMovieAction {
  type: typeof REMOVEMOVIE;
  payload: Movie;
  key: string;
}

interface setCurrentMovieAction {
  type: typeof SETCURRENTMOVIE;
  payload: Movie;
}

export {
  REGISTERUSER,
  EDITUSERBYKEY,
  ADDMOVIE,
  REMOVEMOVIE,
  SETCURRENTMOVIE,
  User,
  Movie,
  Movies,
  Initial,
  registerUserAction,
  editUserByKeyAction,
  addMovieAction,
  removeMovieAction,
  setCurrentMovieAction,
};

export type ActionTypes =
  | registerUserAction
  | editUserByKeyAction
  | addMovieAction
  | removeMovieAction
  | setCurrentMovieAction;
