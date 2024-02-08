import { VideoPublic } from "../types";
import { VideoItem } from "./VideoItem";

interface VideosPublicProp {
  videos: VideoPublic[];
}

export const VideosPublic = ({ videos }: VideosPublicProp) => {
  return (
    <section>
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-white">Good morning, Luchooo!</h1>
      </header>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <VideoItem key={video.id} {...video} />
        ))}
      </article>
    </section>
  );
};
