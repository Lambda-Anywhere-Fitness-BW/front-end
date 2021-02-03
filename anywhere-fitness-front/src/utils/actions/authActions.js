//Hooks
import axiosWithAuth from "../hooks/axiosWithAuth";

//Functional Imports
import API_BASE from "../keys";

//ACTION VARIABLES
export const USER_SIGNED_UP = "USER_SIGNED_UP";
export const USER_LOGGED_IN = "USER_LOGGED_IN";

export const signUpSubmitClient = (form) => (dispatch) => {
  axiosWithAuth()
    .post(`${API_BASE}/register/client`, form)
    .then((res) => {
      dispatch({ type: USER_SIGNED_UP, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
