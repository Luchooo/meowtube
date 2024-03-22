import { useQuery } from "@tanstack/react-query";
import { VideoMain } from "../components/Videos/VideosMain";
import { Video } from "../types";
import { getMyVideos } from "../api/videos";
import { useAuth } from "../hooks/useAuth";

export const MyVideos = () => {
  const { user } = useAuth();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<Video[]>({
    queryKey: ["my-videos"],
    queryFn: () => getMyVideos({ userId: user?.id }),
    refetchOnWindowFocus: false,
  });

  return <VideoMain error={error} isLoading={isLoading} videos={videos} />;
};
