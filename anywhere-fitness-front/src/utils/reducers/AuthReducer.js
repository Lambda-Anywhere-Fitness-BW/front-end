//Action imports
import {
  USER_LOGGED_IN,
  CLIENT_SIGNED_UP,
  INSTRUCTOR_SIGNED_UP,
} from "../actions/authActions";

const initialState = {
  client: {
    name: "",
    email: "",
    password: "",
    username: "",
    fitnesslevel: 0,
    location: "",
    bio: "",
    aviurl: "",
  },
  instructor: {
    name: "",
    email: "",
    password: "",
    username: "",
    credentials: "",
    specialty: "",
    yearsexp: 0,
    bio: "",
    aviurl: "",
  },
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_SIGNED_UP:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        username: action.payload.username,
        fitnesslevel: action.payload.fitnesslevel,
        location: action.payload.location,
        bio: action.payload.bio,
        aviurl: action.payload.aviurl,
      };
    case INSTRUCTOR_SIGNED_UP:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        username: action.payload.username,
        credentials: action.payload.credentials,
        specialty: action.payload.specialty,
        yearsexp: action.payload.yearsexp,
        bio: action.payload.bio,
        aviurl: action.payload.aviurl,
      };

    case USER_LOGGED_IN:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default AuthReducer;
