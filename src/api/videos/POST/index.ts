import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../../../constants";
import type {
  User,
  VideoCreatePayload,
  VideoWithOutJoin,
} from "../../../types";
import { localStorage } from "../../../utils/localStorage";
import { VideoVisible } from "../../../enum";

const { getItem } = localStorage("user");

const createVideo = async (formData: VideoCreatePayload) => {
  const isPublic = formData.isPublic === VideoVisible.public;
  const user = getItem<User>();

  return await axios.post<VideoWithOutJoin>(
    `${API_BASE_URL}/api/videos`,
    { ...formData, isPublic },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user?.token,
      },
    }
  );
};

export const ApiCreateVideo = async (formData: VideoCreatePayload) => {
  try {
    const res = await createVideo(formData);
    return res.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data?.error);
    }
    throw new Error("Unknown error create video");
  }
};
