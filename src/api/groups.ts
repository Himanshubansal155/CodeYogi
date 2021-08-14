import axios, { CancelTokenSource } from "axios";
import { Group } from "../models/Group";
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

  return get<GroupResponse>(url, {
    params: data,
    cancelToken: tokenSource?.token,
  });
};

export interface SelectedGroupResponse {
  data: Group;
}

export const fetchGroup = (selected: number) => {
  const url = BASE_URL + "/groups/" + selected;
  return axios.get<SelectedGroupResponse>(url).then((response) => {
    return response.data.data;
  });
};
