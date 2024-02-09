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

export interface PostUserResponse {
  id: number;
  username: string;
  token: string;
}

export interface PostUserPayload {
  email: string;
  password: string;
}
