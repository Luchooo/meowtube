import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../../constants";
import { User, Video } from "../../types";
import { localStorage } from "../../utils/localStorage";

const { getItem } = localStorage("user");

const videosPublic = async () => {
  return await axios.get<Video[]>(`${API_BASE_URL}/api/videos/public`);
};

const videos = async ({ token }: User) => {
  return await axios.get<Video[]>(`${API_BASE_URL}/api/videos`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const ApiVideos = async () => {
  try {
    const user = getItem<User>();
    const res = user ? await videos(user) : await videosPublic();
    return res.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw { message: e.response?.data?.error };
    }
    throw { message: "Unknow error lola" };
  }
};
