import { useAuth } from "../hooks/useAuth";
import { Video } from "../types";
import { getTitleHome } from "../utils/getTitleHome";
import { VideoItem } from "./VideoItem";

interface VideosProps {
  videos: Video[];
}

export const Videos = ({ videos }: VideosProps) => {
  const { user } = useAuth();
  const titleHome = getTitleHome(user);

  return (
    <section>
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-white">{titleHome}</h1>
      </header>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <VideoItem key={video.id} {...video} />
        ))}
      </article>
    </section>
  );
};
