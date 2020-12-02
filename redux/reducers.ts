import {
  REGISTERUSER,
  EDITUSERBYKEY,
  ADDMOVIE,
  REMOVEMOVIE,
  Movie,
  Initial,
  ActionTypes,
  registerUserAction,
  editUserByKeyAction,
  addMovieAction,
  removeMovieAction,
} from "./types";

const initialState: Initial = {
  user: {
    username: "",
    mail: "",
    password: "",
    avatar: undefined,
    isNew: true,
    isRolled: false,
  },
  movies: {
    watched: [],
    //notWatched: [],
    later: [],
    declined: [],
    current: {},
  },
};

const registerUser = (state: Initial, action: registerUserAction) => {
  return {
    ...state,
    user: action.payload,
  };
};

const editUserByKey = (state: Initial, action: editUserByKeyAction) => {
  return {
    ...state,
    user: {
      ...state.user,
      [action.key]: action.payload,
    },
  };
};

const addMovie = (state: Initial, action: addMovieAction) => {
  return {
    ...state,
    movies: {
      ...state.movies,
      [action.key]: [...state.movies[action.key], action.payload],
    },
  };
};

const removeMovie = (state: Initial, action: removeMovieAction) => {
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

const reducer = (state = initialState, action: ActionTypes): Initial => {
  switch (action.type) {
    case REGISTERUSER:
      return registerUser(state, action);
    case EDITUSERBYKEY:
      return editUserByKey(state, action);
    case ADDMOVIE:
      return addMovie(state, action);
    case REMOVEMOVIE:
      return removeMovie(state, action);

    default:
      return state;
  }
};

export default reducer;
