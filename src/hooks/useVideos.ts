import useSWR from "swr";
import { VideoPublic } from "../types";
import { fecthVideos } from "../utils/fecthVideos";

export const useVideos = () => {
  const {
    data: videos,
    error,
    isLoading,
  } = useSWR<VideoPublic[]>(`api/videos/public`, fecthVideos);
  return { videos, error, isLoading };
};
