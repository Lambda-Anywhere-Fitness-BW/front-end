import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    // baseURL: "https://bw44-anywhere-fitness.herokuapp.com",
  });
};
