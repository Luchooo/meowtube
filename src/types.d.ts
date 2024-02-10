export interface User {
  id: string;
  username: string;
  token: string;
}

export type Video = {
  createdAt: string;
  description: string;
  id: string;
  isPublic: boolean;
  title: string;
  url: string;
  usersId: string;
  Users: {
    username: string;
    avatarUrl: string;
  };
};

export interface PostUserResponse extends User {}

export interface PostUserPayload {
  email: string;
  password: string;
}

export interface AlertProps {
  msg: string;
  type: "error" | "success";
}

export type DataToStore<T> = {
  expiry: number;
  value: T;
};
