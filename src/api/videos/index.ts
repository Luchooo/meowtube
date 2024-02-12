import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../../constants";
import { User, Video } from "../../types";
import { localStorage } from "../../utils/localStorage";

interface ApiVideosProps {
  queryKey: [string, boolean | undefined];
}

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

const videosByUserId = async ({ id, token }: User) => {
  const urlBase = API_BASE_URL;
  const path = "/api/videos";
  const url = new URL(path, urlBase);
  url.searchParams.append("userId", id);

  return await axios.get<Video[]>(url.href, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const ApiVideos = async ({ queryKey }: ApiVideosProps) => {
  const [, isMyVideos] = queryKey;

  try {
    const user = getItem<User>();
    let res;
    if (!user) {
      res = await videosPublic();
    } else if (isMyVideos) {
      res = await videosByUserId(user);
    } else {
      res = await videos(user);
    }
    return res.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw { message: e.response?.data?.error };
    }
    throw { message: "Unknow error getting videos" };
  }
};
