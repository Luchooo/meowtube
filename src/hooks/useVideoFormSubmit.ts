import { FormikHelpers } from "formik";
import { VideoWithOutJoin } from "../types";
import { useAlert } from "./useAlert";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useVideoFormSubmit = <T>(ApiVideos: {
  (formData: T): Promise<VideoWithOutJoin>;
}) => {
  const { showAlert } = useAlert();
  const navigate = useNavigate();
  const mutation = useMutation({ mutationFn: ApiVideos });
  const handleSubmit = async (
    values: T,
    { setSubmitting }: FormikHelpers<T>
  ) => {
    try {
      await mutation.mutateAsync(values);
      showAlert({ msg: "¡Video creado con exito!", type: "success" });
      navigate("/my-videos");
    } catch (error) {
      const msg =
        error instanceof Error
          ? error.message
          : "Unknow error with video request";
      showAlert({ msg, type: "error" });
    } finally {
      setSubmitting(false);
    }
  };

  return { handleSubmit };
};
