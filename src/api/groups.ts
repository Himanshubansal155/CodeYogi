import axios, { CancelTokenSource } from "axios";
import { Group } from "../models/Group";
import { LS_LOGIN_TOKEN } from "./Auth";
import { BASE_URL, get } from "./base";

export interface GroupRequest {
  limit?: number;
  offset?: number;
  status: "all-groups" | "undefined";
  query: string;
}

export interface GroupResponse {
  data: Group[];
}

export const fetchGroups = (
  data: GroupRequest,
  tokenSource?: CancelTokenSource
) => {
  const url = BASE_URL + "/groups";
  const token = localStorage.getItem(LS_LOGIN_TOKEN);

  return get<GroupResponse>(url, {
    params: data,
    cancelToken: tokenSource?.token,
    headers: { Authorization: token },
  });
};

export interface SelectedGroupResponse {
  data: Group;
}

export const fetchGroup = (selected: number) => {
  const url = BASE_URL + "/groups/" + selected;
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  return axios
    .get<SelectedGroupResponse>(url, { headers: { Authorization: token } })
    .then((response) => {
      return response.data.data;
    });
};
