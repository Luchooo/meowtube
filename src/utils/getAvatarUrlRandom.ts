import { avatars } from "../constants";

export const getAvatarUrlRandom = (): string => {
  const randomNumber = Math.floor(Math.random() * avatars.length);
  return avatars[randomNumber].url;
};
