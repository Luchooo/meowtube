import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../../constants";
import type { User, UserSignUpPayload } from "../../types";

const signUpUser = async (formData: UserSignUpPayload) => {
  const { avatarUrl, email, password, username } = formData;
  return await axios.post<User>(
    `${API_BASE_URL}/api/users/sign-up`,
    { avatarUrl, email, password, username },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const ApiSignUpUser = async (formData: UserSignUpPayload) => {
  try {
    const res = await signUpUser(formData);
    return res.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data?.error);
    }
    throw new Error("Unknow error sign up user");
  }
};
