import type { Video } from "../../types";
import { getIdVideo } from "../../utils/getIdVideo";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { getUsernameAndAvatarUrl } from "../../utils/getInfoVideo";
import { VideoItemHeader } from "./VideoItemHeader";
import { VideoItemBody } from "./VideoItemBody";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface VideoItemProps extends Video {
  isMyVideos: boolean | undefined;
}

export const VideoItem = ({
  isMyVideos,
  description,
  title,
  createdAt,
  url,
  Users,
}: VideoItemProps) => {
  const { avatarUrl, username } = getUsernameAndAvatarUrl({
    user: Users,
    isMyVideos,
  });

  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl flex flex-col gap-8">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        <VideoItemHeader
          avatarUrl={avatarUrl}
          createdAt={createdAt}
          username={username}
        />
      </div>
      <VideoItemBody description={description} title={title} />
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
