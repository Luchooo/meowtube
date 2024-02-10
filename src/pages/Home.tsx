import { SkeletonVideos } from "../components/SkeletonVideos";
import { Error } from "../components/Error";

import { useQuery } from "@tanstack/react-query";
import { ApiVideosPublic } from "../api/videos/public";
import { Videos } from "../components/Videos";

export const Home = () => {
  const {
    data: videos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: ApiVideosPublic,
  });

  return (
    <section>
      {isLoading && <SkeletonVideos />}
      {!isLoading && error && <Error msg="Error getting videos public" />}
      {!isLoading && !error && videos && <Videos videos={videos} />}
    </section>
  );
};
