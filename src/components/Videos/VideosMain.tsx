import { Video } from "../../types";
import { SkeletonVideos } from "../SkeletonVideos";
import { Videos } from "./Videos";
import { VideosNotFound } from "./VideosNotFound";
import { VideosError } from "../VideosError";

interface VideoMainProps {
  isLoading: boolean;
  error: Error | null;
  videos: Video[] | undefined;
}

export const VideoMain = ({ error, isLoading, videos }: VideoMainProps) => {
  return (
    <>
      {isLoading && <SkeletonVideos />}
      {!isLoading && error && <VideosError msg={error.message} />}
      {!isLoading && !error && videos && videos.length === 0 && (
        <VideosNotFound isMyVideos={false} />
      )}
      {!isLoading && !error && videos && videos.length > 0 && (
        <Videos videos={videos} isMyVideos={false} />
      )}
    </>
  );
};
