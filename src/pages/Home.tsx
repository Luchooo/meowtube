import { SkeletonVideos } from "../components/SkeletonVideos";
import { Error } from "../components/Error";

import { useVideos } from "../hooks/useVideos";
import { Videos } from "../components/Videos";

export const Home = () => {
  const { videos, error, isLoading } = useVideos();

  return (
    <section>
      {isLoading && <SkeletonVideos />}
      {error && <Error msg="Error getting videos public" />}
      {videos && <Videos videos={videos} />}
    </section>
  );
};
