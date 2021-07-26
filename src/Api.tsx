import axios from "axios";

export const LS_LOGIN_TOKEN = "login_token";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  if (!token) {
    return config;
  }
  return { ...config, headers: { ...config.headers, Authorization: token } };
});

interface LoginFields {
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

interface User {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
}

const BASE_URL = "https://api-dev.domecompass.com";

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

axios.interceptors.response.use(undefined, function (error) {
  if(error.response.data.code === 9101){
    localStorage.removeItem(LS_LOGIN_TOKEN);
    window.location.href = "/login";
  }
  return Promise.reject(error);
});

interface GroupRequest {
  limit?: number;
  offset?: number;
  status: "all-groups" | "undefined";
  query?: string;
}

export interface GroupResponse {
  data:[{
    name:string,
    group_image_url:string,
    description:string,
  }]
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
