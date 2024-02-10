import type { Video } from "../types";
import { getIdVideo } from "../utils/getIdVideo";
import { getRelativeTime } from "../utils/getRelativeTime";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const VideoItem = ({
  description,
  title,
  createdAt,
  url,
  Users,
}: Video) => {
  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl flex flex-col gap-8">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={Users?.avatarUrl ?? "/rocker.webp"}
            className="w-14 h-14 object-cover rounded-full"
          />
          <div>
            <h3 className="font-bold text-primary/60">
              @{Users?.username ?? "Rocker Anonymous"}
            </h3>
            <p className="text-cyan-50/80">{getRelativeTime(createdAt)}</p>
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-lg font-bold capitalize">{title}</h5>
        <p className="text-zinc-300/90 capitalize">{description}</p>
      </div>
      <LiteYouTubeEmbed
        activatedClass="rounded-xl"
        muted={true}
        aspectWidth={19}
        aspectHeight={14}
        id={getIdVideo(url)}
        title={title}
      />
    </div>
  );
};
