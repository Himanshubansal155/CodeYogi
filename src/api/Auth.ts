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

interface MeResponse {
  data: User;
}

export const me = async () => {
  const url = BASE_URL + "/me";
  const response = await axios.get<MeResponse>(url);
  return response.data.data;
};

interface MeChangeResponse {
  id?: number;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  profile_pic_url?: string;
  email?: string;
  bio?: string;
  phone_number?: number;
  alternate_phone_number?: number;
  state_code?: number;
  hometown?: string;
}

export const meChange = (data: MeChangeResponse) => {
  const url = BASE_URL + "/me";
  return axios.put(url, data).then((response) => response.data);
};
