import { LinkButton } from "../ui/LinkButton";

interface VideosHeaderProps {
  isMyVideos: boolean | undefined;
  titleHome: string;
}

export const VideosHeader = ({ isMyVideos, titleHome }: VideosHeaderProps) => {
  return (
    <header className="flex items-center justify-between mb-10">
      <h1 className="flex-auto text-4xl text-white">{titleHome}</h1>
      {isMyVideos && (
        <div className="flex-none">
          <LinkButton to={"/upload-video"}>Subir video</LinkButton>
        </div>
      )}
    </header>
  );
};
