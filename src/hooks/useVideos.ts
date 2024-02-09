import useSWR from "swr";
import { Video } from "../types";
import { fecthVideos } from "../utils/fecthVideos";

export const useVideos = () => {
  const {
    data: videos,
    error,
    isLoading,
  } = useSWR<Video[]>(`api/videos/public`, fecthVideos);
  return { videos, error, isLoading };
};
