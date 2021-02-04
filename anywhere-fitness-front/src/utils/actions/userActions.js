import PrivateRoute from "../../components/PrivateRoute";
import axiosWithAuth from "../hooks/axiosWithAuth";

export const CREATE_CLASS = "CREATE_CLASS";
export const DELETE_CLASS = "DELETE_CLASS";
export const ADD_CLASS = "ADD_CLASS";
export const REMOVE_CLASS = "REMOVE_CLASS";
export const CREATE_PUNCHPASS = "CREATE_PUNCHPASS";

//action creators returning action objects
//!use dispatch
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
