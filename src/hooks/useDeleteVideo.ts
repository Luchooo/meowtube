import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteVideo } from "../api/videos";

export const useDeleteVideo = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteVideo,
    onSuccess: () => {
      console.log("lola");

      queryClient.invalidateQueries({ queryKey: ["my-videos"] });
    },
    onError: () => {
      console.log("error delete");
    },
  });

  const handleDelete = (videoId: string) => {
    mutation.mutate({
      videoId,
    });
  };

  return { handleDelete };
};
