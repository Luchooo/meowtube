import { User } from "../types";
import { localStorage } from "../utils/localStorage";

const { getItem } = localStorage("user");

interface getUsernameAndAvatarUrlProps {
  user: { username: string; avatarUrl: string };
  isMyVideos: boolean | undefined;
}

interface getUsernameAndAvatarUrlResponse {
  username: string;
  avatarUrl: string;
}

export const getUsernameAndAvatarUrl = ({
  user,
  isMyVideos,
}: getUsernameAndAvatarUrlProps): getUsernameAndAvatarUrlResponse => {
  const info = {
    username: "Rocker Anonymous",
    avatarUrl: "/rocker.webp",
  };

  const userLocal = getItem<User>();
  if (user?.username) info.username = user.username;
  if (user?.avatarUrl) info.avatarUrl = user.avatarUrl;
  if (userLocal && isMyVideos) {
    info.username = userLocal.username;
    info.avatarUrl = userLocal.avatarUrl;
  }

  return info;
};
