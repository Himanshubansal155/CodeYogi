import axios from "axios";
import { User } from "../models/User";
import { BASE_URL } from "./base";

export const LS_LOGIN_TOKEN = "login_token";

export interface LoginFields {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    is_2fa_enabled: boolean;
  };
  token: string;
  user: User;
}


export const login = (data: LoginFields) => {
  const url = BASE_URL + "/login";
  return axios.post<LoginResponse>(url, data).then((response) => {
    localStorage.setItem(LS_LOGIN_TOKEN, response.data.token);
    return response.data.user;
  });
};

export const logout = () => {
  localStorage.removeItem(LS_LOGIN_TOKEN);
};

