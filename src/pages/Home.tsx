import { SkeletonVideos } from "../components/SkeletonVideos";
import { Error } from "../components/Error";

import { useQuery } from "@tanstack/react-query";
import { ApiVideos } from "../api/videos";
import { Videos } from "../components/Videos/Videos";
import { VideosNotFound } from "../components/Videos/VideosNotFound";

interface HomeProps {
  isMyVideos?: boolean;
}

export const Home = ({ isMyVideos }: HomeProps) => {
  const {
    data: videos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["videos", isMyVideos],
    queryFn: ApiVideos,
  });
  return (
    <section>
      {isLoading && <SkeletonVideos />}
      {!isLoading && error && <Error msg={error.message} />}
      {!isLoading && !error && videos && videos.length === 0 && (
        <VideosNotFound isMyVideos={isMyVideos} />
      )}
      {!isLoading && !error && videos && videos.length > 0 && (
        <Videos videos={videos} isMyVideos={isMyVideos} />
      )}
    </section>
  );
};
