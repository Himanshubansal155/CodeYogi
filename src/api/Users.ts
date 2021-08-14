import axios, { CancelTokenSource } from "axios";
import { User } from "../models/User";
import { BASE_URL, get } from "./base";

export interface UserResponse {
  data: User[];
}

export const fetchUsers = (tokenSource?: CancelTokenSource) => {
  const url = BASE_URL + "/people";
  return get<UserResponse>(url, { cancelToken: tokenSource?.token });
};

export interface SelectedUserResponse {
  data: User;
}

export const fetchUser = (selected: number) => {
  const url = BASE_URL + "/people/" + selected;
  return axios.get<SelectedUserResponse>(url).then((response) => {
    return response.data.data;
  });
};
