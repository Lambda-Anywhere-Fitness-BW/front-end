//Hooks
import axiosWithAuth from "../hooks/axiosWithAuth";
import axios from "axios";

//Functional Imports
import API_BASE from "../keys";

//ACTION VARIABLES
export const CLIENT_SIGNED_UP = "CLIENT_SIGNED_UP";
export const INSTRUCTOR_SIGNED_UP = "INSTRUCTOR_SIGNED_UP";
export const USER_LOGGED_IN = "USER_LOGGED_IN";

export const signUpSubmitClient = (form) => (dispatch) => {
  axios
    .post(`${API_BASE}/register/client`, form)
    .then((res) => {
      console.log("res", res);
      dispatch({ type: CLIENT_SIGNED_UP, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signUpSubmitInstructor = (form) => (dispatch) => {
  axios
    .post(`${API_BASE}/register/instructor`, form)
    .then((res) => {
      dispatch({ type: INSTRUCTOR_SIGNED_UP, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
