import axios from "axios";
import { requestHandler } from "./requestHandler";
import { API_BASE_URL } from "../constants";
import { PostUserPayload, PostUserResponse } from "../types";

export const getUser = requestHandler<PostUserPayload, PostUserResponse>(
  (params) => axios.post(`${API_BASE_URL}/api/users/sign-in`, params)
);
