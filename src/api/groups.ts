import axios from "axios";
import { Group } from "../models/Group";
import { LS_LOGIN_TOKEN } from "./Auth";
import { BASE_URL } from "./base";

interface GroupRequest {
    limit?: number;
    offset?: number;
    status: "all-groups" | "undefined";
    query?: string;
  }
  
  export interface GroupResponse {
    data:[Group]
  }
  
  export const fetchGroups = (data: GroupRequest) => {
    const url = BASE_URL + "/groups";
    const token = localStorage.getItem(LS_LOGIN_TOKEN);
    return axios
      .get<GroupResponse>(url, { params: data, headers: { Authorization: token } })
      .then((response) => {
        return response.data.data;
      });
  };