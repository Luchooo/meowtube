import { LinkButton } from "../ui/LinkButton";

interface VideosHeaderProps {
  isMyVideos: boolean | undefined;
  titleHome: string;
}

export const VideosHeader = ({ isMyVideos, titleHome }: VideosHeaderProps) => {
  return (
    <header className="flex items-center justify-between mb-10 gap-4">
      <h1 className="flex-auto text-2xl sm:text-4xl text-white">{titleHome}</h1>
      {isMyVideos && (
        <div className="flex-none">
          <LinkButton to={"/upload-video"}>Subir video</LinkButton>
        </div>
      )}
    </header>
  );
};
