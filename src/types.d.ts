import { VideoVisible } from "./enum";

export interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl: string;
  token: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  createdAt: string;
  isPublic: boolean;
  usersId: string;
  Users: {
    username: string;
    avatarUrl: string;
  };
}

export interface VideoWithOutJoin extends Omit<Video, "Users"> {}

export interface UserSigninPayload {
  email: string;
  password: string;
}

export interface UserSignUpPayload {
  email: string;
  password: string;
  passwordConfirmation: string;
  username: string;
  avatarUrl: string;
}

export interface AlertProps {
  msg: string;
  type: "error" | "success";
}

export type DataToStore<T> = {
  expiry: number;
  value: T;
};

export interface VideoCreatePayload {
  title: string;
  description: string;
  url: string;
  isPublic: VideoVisible;
}
