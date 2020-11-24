import {
  SET_USER,
  ADD_MOVIE,
  REMOVE_MOVIE,
  SET_ISNEW,
  SET_ISROLLED,
} from "./types";

const initialState = {
  user: {
    username: "",
    detail: "",
    avatar: false,
  },
  movies: {
    watched: [],
    later: [],
    declined: [],
    current: [],
  },
  isNew: true,
  isRolled: false,
};

const setUser = (state, action) => {
  return {
    ...state,
    user: {
      ...state.user,
      [action.key]: action.payload,
    },
  };
};

const addMovie = (state, action) => {
  return {
    ...state,
    movies: {
      ...state.movies,
      [action.key]: [...state.movies[action.key], action.payload],
    },
  };
};

const removeMovie = (state, action) => {
  return {
    ...state,
    movies: {
      ...state.movies,
      [action.key]: [
        ...state.movies[action.key].filter((movie) => movie != action.payload),
      ],
    },
  };
};

const setIsNew = (state, action) => {
  return {
    ...state,
    isNew: action.payload,
  };
};

const setIsRolled = (state, action) => {
  return {
    ...state,
    isRolled: action.payload,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return setUser(state, action);
    case ADD_MOVIE:
      return addMovie(state, action);
    case REMOVE_MOVIE:
      return removeMovie(state, action);
    case SET_ISNEW:
      return setIsNew(state, action);
    case SET_ISROLLED:
      return setIsRolled(state, action);
    default:
      return state;
  }
};

export default reducer;
