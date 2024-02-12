import { getRelativeTime } from "../../utils/getRelativeTime";

interface VideoItemHeaderProps {
  avatarUrl: string;
  username: string;
  createdAt: string;
}

export const VideoItemHeader = ({
  avatarUrl,
  username,
  createdAt,
}: VideoItemHeaderProps) => {
  return (
    <header className="flex items-center gap-4">
      <img src={avatarUrl} className="w-14 h-14 object-cover rounded-full" />
      <div>
        <h3 className="font-bold text-primary/60">@{username}</h3>
        <p className="text-cyan-50/80">{getRelativeTime(createdAt)}</p>
      </div>
    </header>
  );
};
