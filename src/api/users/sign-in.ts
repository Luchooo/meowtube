import axios from "axios";
import { API_BASE_URL } from "../../constants";
import { PostUserPayload, PostUserResponse } from "../../types";
import { requestHandler } from "../requestHandler";

export const sigInUser = requestHandler<PostUserPayload, PostUserResponse>(
  (params) => axios.post(`${API_BASE_URL}/api/users/sign-in`, params)
);

export const ApiSignInUser = async (formData: PostUserPayload) => {
  return await sigInUser(formData);
};
