import { useAuth } from "../../hooks/useAuth";
import { Video } from "../../types";
import { getTitleHome } from "../../utils/getTitleHome";
import { VideoItem } from "./VideoItem";
import { VideosHeader } from "./VideosHeader";

interface VideosProps {
  videos: Video[];
  isMyVideos: boolean | undefined;
}

export const Videos = ({ videos, isMyVideos }: VideosProps) => {
  const { user } = useAuth();
  const titleHome = getTitleHome(user);

  return (
    <section>
      <VideosHeader isMyVideos={isMyVideos} titleHome={titleHome} />
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <VideoItem key={video.id} {...video} isMyVideos={isMyVideos} />
        ))}
      </article>
    </section>
  );
};
