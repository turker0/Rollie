interface User {
  username: string;
  mail: string;
  password: string;
  isNew: boolean;
  isRolled: boolean;
  isLoggedIn: boolean;
  avatar: number;
  movies: Movies;
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
  [key: string]: any;
  watched: Movie[];
  later: Movie[];
  declined: Movie[];
  current: Movie;
}

const SETUSER = "SETUSER";
const EDITUSERBYKEY = "EDITUSERBYKEY";
const ADDMOVIE = "ADDMOVIE";
const REMOVEMOVIE = "REMOVEMOVIE";
const SETCURRENTMOVIE = "SETCURRENTMOVIE";

interface editUserByKeyAction {
  type: typeof EDITUSERBYKEY;
  payload: string | boolean | number;
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

interface setUserAction {
  type: typeof SETUSER;
  payload: User;
}

export { EDITUSERBYKEY, ADDMOVIE, REMOVEMOVIE, SETCURRENTMOVIE, SETUSER };

export type ActionTypes =
  | editUserByKeyAction
  | addMovieAction
  | removeMovieAction
  | setCurrentMovieAction
  | setUserAction;

export type {
  User,
  Movie,
  Movies,
  editUserByKeyAction,
  addMovieAction,
  removeMovieAction,
  setCurrentMovieAction,
  setUserAction,
};
