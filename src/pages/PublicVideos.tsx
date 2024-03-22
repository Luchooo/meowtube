import { useQuery } from "@tanstack/react-query";
import { Video } from "../types";
import { getPublicVideos } from "../api/videos";
import { VideoMain } from "../components/Videos/VideosMain";

export const PublicVideos = () => {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<Video[]>({
    queryKey: ["public-videos"],
    queryFn: getPublicVideos,
    refetchOnWindowFocus: false,
  });

  return <VideoMain error={error} isLoading={isLoading} videos={videos} />;
};
