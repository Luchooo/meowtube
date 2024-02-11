import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../../constants";
import type { User, UserSigninPayload } from "../../types";

const signInUser = async (formData: UserSigninPayload) => {
  return await axios.post<User>(`${API_BASE_URL}/api/users/sign-in`, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const ApiSignInUser = async (formData: UserSigninPayload) => {
  try {
    const res = await signInUser(formData);
    return res.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data?.error);
    }
    throw new Error("Unknow error sign in user");
  }
};
