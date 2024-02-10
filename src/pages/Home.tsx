import { SkeletonVideos } from "../components/SkeletonVideos";
import { Error } from "../components/Error";

import { useQuery } from "@tanstack/react-query";
import { ApiVideos } from "../api/videos";
import { Videos } from "../components/Videos";

export const Home = () => {
  const {
    data: videos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: ApiVideos,
  });
  return (
    <section>
      {isLoading && <SkeletonVideos />}
      {!isLoading && error && <Error msg={error.message} />}
      {!isLoading && !error && videos && <Videos videos={videos} />}
    </section>
  );
};
