import React, { useHistory, useState } from "react";
//Hooks
import axiosWithAuth from "../auth/axiosWithAuth";
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
  console.log('BEFORE AXIOS CALL INSIDE INSTRUCTOR SIGN UP')
  axios
    .post(`${API_BASE}/register/instructor`, form)
    .then((res) => {
      console.log('INSIDE INSTRUCTOR SIGN UP')
      dispatch({ type: INSTRUCTOR_SIGNED_UP, payload: res.data });
    })
    .catch((err) => {
      console.log('INSTRUCTOR SIGN UP ERROR',err);
    });
};

export const userLogin = (loginForm) => (dispatch) => {
  // const history = useHistory();
  console.log(`${API_BASE}`);

  axios
    .post(
      `${API_BASE}/login`,
      `grant_type=password&username=${loginForm.username}&password=${loginForm.password}`,
      {
        headers: {
          // btoa is converting our client id/client secret into base64
          Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      console.log('userLogin',res.data);
      localStorage.setItem("token", res.data.access_token);
      
    });
};

export const getUserInfo = () => {

  //const [userData, setUserData] = useState(null);
  // if sucessful, iterate through res.client.clientfitnessclasses.fitnessclasses.user.username === search term from login
  // if so, res.client.clientfitnessclasses.fitnessclasses.user.roles.role.name = Client or Instructor

  axiosWithAuth
      .get(`${API_BASE}/users/getuserinfo`)
      
      .then((res) => {
        return console.log('getUserinfo',res.data)
      })
      .catch(err => {
        console.log("getUserinfo error", err)
      })
}


//   axiosWithAuth()
//     .post("/login", loginForm) // ADD ENDPOINT and credentials here
//     .then((res) => {
//       console.log("Res", res);
//       localStorage.setItem("token", res.data.payload);
//       // this.props.history.push(`/client/${id}); // redirects
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
