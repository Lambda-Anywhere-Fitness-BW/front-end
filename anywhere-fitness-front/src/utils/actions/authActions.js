//Hooks
import axiosWithAuth from "../hooks/axiosWithAuth";
import axios from 'axios'

//Functional Imports
import API_BASE from "../keys";

//ACTION VARIABLES
export const USER_SIGNED_UP = "USER_SIGNED_UP";
export const USER_LOGGED_IN = "USER_LOGGED_IN";

export const signUpSubmitClient = (form) => (dispatch) => {
  axios
    .post(`${API_BASE}/register/client`, form
    
    // `grant_type=password&username=${form.username}&password=${form.password}`,
    // {
    //   // https://bit.ly/36C4NRm
    //   headers: {
    //     // btoa is converting our client id/client secret into base64
    //     Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    // },
    
    )
    .then((res) => {
      dispatch({ type: USER_SIGNED_UP, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signUpSubmitInstructor = (form) => (dispatch) => {

    axios

      .post(`${API_BASE}/register/instructor`, form)
      .then((res) => {
        dispatch({ type: USER_SIGNED_UP, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };