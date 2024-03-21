import axios, { AxiosInstance } from "axios";
import { localStorage } from "../utils/localStorage";
import { User } from "../types";
import { API_BASE_URL } from "../constants";

const { getItem } = localStorage("user");
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const user = getItem<User>();
    if (!user) throw new Error("Token not found");
    config.headers["Authorization"] = `Bearer ${user.token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
