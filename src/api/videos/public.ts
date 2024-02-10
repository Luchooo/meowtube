import axios from "axios";
import { API_BASE_URL } from "../../constants";
import { requestHandler } from "../requestHandler";
import { Video } from "../../types";

export const videosPublic = requestHandler<void, Video[]>(() =>
  axios.get(`${API_BASE_URL}/api/videos/public`)
);

export const ApiVideosPublic = async () => {
  try {
    const res = await videosPublic();
    if (res.code === "error") throw res.error.response?.data;
    return res.data;
  } catch (e) {
    throw new Error("Error while getting videos public");
  }
};
