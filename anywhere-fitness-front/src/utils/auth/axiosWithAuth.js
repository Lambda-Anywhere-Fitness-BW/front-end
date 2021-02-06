import axios from "axios";

const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: `bearer ${token}`,
    },
    baseURL: "https://bw44-anywhere-fitness.herokuapp.com",
  });
};

export default axiosWithAuth;
