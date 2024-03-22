import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../../constants";
import { User, Video } from "../../types";
import { localStorage } from "../../utils/localStorage";
import { axiosInstance } from "../../interceptors/setAuth";

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
    throw { message: "Unknown error getting videos" };
  }
};

interface getMyVideosProps {
  userId: string | undefined;
}

export const getMyVideos = async ({
  userId,
}: getMyVideosProps): Promise<Video[]> => {
  try {
    const res = await axiosInstance.get<Video[]>(
      `/api/videos?userId=${userId}`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching videos: ", error);
    throw error;
  }
};

export const getUserVideos = async (): Promise<Video[]> => {
  try {
    const res = await axiosInstance.get<Video[]>("/api/videos");
    return res.data;
  } catch (error) {
    console.error("Error fetching videos: ", error);
    throw error;
  }
};

export const getPublicVideos = async (): Promise<Video[]> => {
  try {
    const res = await axios.get<Video[]>(`${API_BASE_URL}/api/videos/public`);
    return res.data;
  } catch (error) {
    console.error("Error fetching videos public: ", error);
    throw error;
  }
};

interface deleteVideoProps {
  videoId: string;
}

export const deleteVideo = async ({
  videoId,
}: deleteVideoProps): Promise<void> => {
  try {
    await axiosInstance.delete(`/api/videos/${videoId}`);
  } catch (error) {
    console.error("Error deleting video:", error);
    throw error;
  }
};
