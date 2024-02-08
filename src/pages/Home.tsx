import { SkeletonVideos } from "../components/SkeletonVideos";
import { Error } from "../components/Error";

import { useVideos } from "../hooks/useVideos";
import { VideosPublic } from "../components/VideosPublic";

export const Home = () => {
  const { videos, error, isLoading } = useVideos();

  return (
    <section>
      {isLoading && <SkeletonVideos />}
      {error && <Error msg="Error getting videos public" />}
      {videos && <VideosPublic videos={videos} />}
    </section>
  );
};
