import axios from "axios";
import { LS_LOGIN_TOKEN } from "./Auth";

export const BASE_URL = "https://api-dev.domecompass.com";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  if (!token) {
    return config;
  }
  return { ...config, headers: { ...config.headers, Authorization: token } };
});

axios.interceptors.response.use(undefined, function (error) {
  if (axios.isCancel(error)) {
    return Promise.reject(Error);
  }
  if (error.response.data.code === 9101) {
    localStorage.removeItem(LS_LOGIN_TOKEN);
    window.location.href = "/login";
  }
  return Promise.reject(error);
});
