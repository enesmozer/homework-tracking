import axios from "axios";

axios.defaults.withCredentials = true;
const http = axios.create({
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-Application-Name": "market",
  },
  baseURL: process.env.REACT_APP_API_URL,
});
http.interceptors.response.use(
  (response) => {
    if (response.data) {
      if (response.data.statusCode === 200 && response.data.message) {
        return response.data;
      }
    }
    return response;
  },
  (error) => {
    const { response } = error;
    const { statusCode } = response;
    if (statusCode === 401) {
      window.location.href = window.location.pathname;
      return new Promise(() => {});
    }
    if (statusCode === 403) {
      return new Promise(() => {});
    }
    if (response.message) {
      return response.message;
    }
    return Promise.reject(error);
  }
);
export default http;
