import axios from "axios";

export default function axiosWithAuth() {
  //* Declare and specify the token to use
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: token,
    },
  });
}
