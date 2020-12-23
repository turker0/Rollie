import {
  EDITUSERBYKEY,
  ADDMOVIE,
  REMOVEMOVIE,
  SETCURRENTMOVIE,
  User,
  Movie,
  Movies,
  editUserByKeyAction,
  addMovieAction,
  removeMovieAction,
  setCurrentMovieAction,
  setUserAction,
  ActionTypes,
  SETUSER,
} from "./types";

const initialState: User = {
  username: "",
  mail: "",
  password: "",
  avatar: undefined,
  isNew: true,
  isRolled: false,
  isLoggedIn: false,
  movies: {
    watched: [],
    later: [],
    declined: [],
    current: {},
  },
};

export const resetState: User = {
  username: "",
  mail: "",
  password: "",
  avatar: undefined,
  isNew: false,
  isRolled: false,
  isLoggedIn: false,
  movies: {
    watched: [],
    later: [],
    declined: [],
    current: {},
  },
};
export const hardReset: User = {
  username: "",
  mail: "",
  password: "",
  avatar: undefined,
  isNew: true,
  isRolled: false,
  isLoggedIn: false,
  movies: {
    watched: [],
    later: [],
    declined: [],
    current: {},
  },
};

const editUserByKey = (state: User, action: editUserByKeyAction) => {
  return {
    ...state,
    [action.key]: action.payload,
  };
};

const addMovie = (state: User, action: addMovieAction) => {
  return {
    ...state,
    movies: {
      ...state.movies,
      [action.key]: [...state.movies[action.key], action.payload],
    },
  };
};

const removeMovie = (state: User, action: removeMovieAction) => {
  return {
    ...state,
    movies: {
      ...state.movies,
      [action.key]: [
        ...state.movies[action.key].filter(
          (movie: Movie) => movie !== action.payload
        ),
      ],
    },
  };
};

const setCurrentMovie = (state: User, action: setCurrentMovieAction) => {
  return {
    ...state,
    movies: {
      ...state.movies,
      current: action.payload,
    },
  };
};

const setUser = (state: User, action: setUserAction) => {
  return {
    ...action.payload,
  };
};

const reducer = (state = initialState, action: ActionTypes): User => {
  switch (action.type) {
    case SETUSER:
      return setUser(state, action);
    case EDITUSERBYKEY:
      return editUserByKey(state, action);
    case ADDMOVIE:
      return addMovie(state, action);
    case REMOVEMOVIE:
      return removeMovie(state, action);
    case SETCURRENTMOVIE:
      return setCurrentMovie(state, action);
    default:
      return state;
  }
};

export default reducer;
