import { useQuery } from "@tanstack/react-query";
import { VideoMain } from "../components/Videos/VideosMain";
import { Video } from "../types";
import { getUserVideos } from "../api/videos";

export const UserVideos = () => {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<Video[]>({
    queryKey: ["user-videos"],
    queryFn: getUserVideos,
    refetchOnWindowFocus: false,
  });

  return <VideoMain error={error} isLoading={isLoading} videos={videos} />;
};
