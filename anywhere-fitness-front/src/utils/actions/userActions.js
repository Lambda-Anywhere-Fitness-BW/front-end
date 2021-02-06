import PrivateRoute from "../../components/PrivateRoute";
import axios from "axios";
import axiosWithAuth from "../hooks/axiosWithAuth";
import API_BASE from "../keys";

export const CREATE_CLASS = "CREATE_CLASS";
export const DELETE_CLASS = "DELETE_CLASS";
export const ADD_CLASS = "ADD_CLASS";
export const REMOVE_CLASS = "REMOVE_CLASS";
export const CREATE_PUNCHPASS = "CREATE_PUNCHPASS";
export const GET_USER_INFO = "GET_USER_INFO";

//action creators returning action objects
//!use dispatch

export const getUser = () => (dispatch) => {
  console.log("action reached");
  axiosWithAuth()
    .get("https://bw44-anywhere-fitness.herokuapp.com/users/getuserinfo")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_USER_INFO, payload: res.data });
    })
    .catch((err) => {
      console.log("ERROR", err.message);
    });
};

export const createClass = (classObject) => (dispatch) => {
  axiosWithAuth()
    .post("classes endpoint")
    .then((res) => {
      dispatch({ type: CREATE_CLASS, payload: res.data.classes });
    })
    .catch((err) => {
      console.log("Error creating class");
    });
};

export const deleteClass = (classObject) => (dispatch) => {
  axiosWithAuth()
    .post("classes endpoint")
    .then((res) => {
      dispatch({ type: DELETE_CLASS, payload: res.data.classes });
    })
    .catch((err) => {
      console.log("Error deleting class");
    });
};

export const createPunchpass = (punchpass) => (dispatch) => {
  axiosWithAuth()
    .post("punchpass endpoint")
    .then((res) => {
      dispatch({ type: CREATE_PUNCHPASS, payload: res.data.punchpass });
    })
    .catch((err) => {
      console.log("Error creating punchpass");
    });
};

//Client
export const addClass = (classObject) => (dispatch) => {
  axiosWithAuth()
    .post("classes endpoint")
    //!client view for adding classes not created yet
    .then((res) => {
      dispatch({ type: ADD_CLASS, payload: res.data.classes });
    })
    .catch((err) => {
      console.log("error adding class");
    });
};

export const removeClass = (classObject) => (dispatch) => {
  axiosWithAuth()
    .post("classes endpoint")
    .then((res) => {
      dispatch({ type: REMOVE_CLASS, payload: classObject });
    })
    .catch((err) => {
      console.log("error adding class");
    });
};
