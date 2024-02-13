import { Formik } from "formik";
import { VideoForm } from "../components/VideoForm/index";
import { videoFormSchema } from "../schemas/videoForm";
import { useVideoFormSubmit } from "../hooks/useVideoFormSubmit";
import { ApiCreateVideo } from "../api/videos/POST";
import { VideoCreatePayload } from "../types";
import { initialValues } from "../components/VideoForm/initValues";

export const VideoUploadPage = () => {
  const { handleSubmit } =
    useVideoFormSubmit<VideoCreatePayload>(ApiCreateVideo);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={videoFormSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => <VideoForm {...formikProps} />}
    </Formik>
  );
};
