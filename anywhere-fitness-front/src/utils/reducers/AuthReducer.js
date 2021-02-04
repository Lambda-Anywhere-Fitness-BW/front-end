//Action imports
import { USER_LOGGED_IN, USER_SIGNED_UP } from "../actions/authActions";

const initialState = {
    name: "",
      username: "",
      email: "",
      location: "",
      avi_url: "",
      //? is this an array or an string?
      class_ID: "",
      //? is ID the way to connect myClasses & classes values.
      classes: [],
    }

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNED_UP:
            return {
                ...state,
                name: action.payload.name,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
                avi_url: action.payload.avi_url,
                role: action.payload.role
            }
        case USER_LOGGED_IN:
            return {
                ...state,
                user_id: action.payload.user_id,
                role: action.payload.role,
            }
        default:
            return state;
    }
};

export default AuthReducer;