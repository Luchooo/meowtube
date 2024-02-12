import { useAuth } from "../../hooks/useAuth";
import { getTitleHome } from "../../utils/getTitleHome";
import { VideosHeader } from "./VideosHeader";

interface VideosNotFounProps {
  isMyVideos: boolean | undefined;
}

export const VideosNotFound = ({ isMyVideos }: VideosNotFounProps) => {
  const { user } = useAuth();
  const titleHome = getTitleHome(user);
  return (
    <>
      <VideosHeader isMyVideos={isMyVideos} titleHome={titleHome} />
      <section className="flex mt-64 w-full flex-col items-center justify-center gap-4">
        <h1 className="text-2xl sm:text-4xl">
          Videos not found 😐, upload a video
        </h1>
      </section>
    </>
  );
};
