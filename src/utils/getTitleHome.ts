import { User } from "../types";

export const getTitleHome = (user: User | null) => {
  const date = new Date().getHours();
  const title =
    date < 12
      ? "Good morning 🌞"
      : date < 18
      ? "Good afternoon 🌤️"
      : "Good night 🌚";

  return !user
    ? `${title}`
    : `${title}, ${
        user.username.charAt(0).toUpperCase() + user.username.slice(1)
      }`;
};
