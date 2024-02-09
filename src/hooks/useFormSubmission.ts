import { FormikHelpers } from "formik";
import { useState } from "react";
import { AxiosError } from "axios";
import { getUser } from "../api/login";
import { PostUserPayload } from "../types";

const getMsgError = (error: AxiosError | unknown): string => {
  if (error instanceof AxiosError) {
    return error.response?.data.error;
  } else {
    return "Hubo un error al enviar la solicitud.";
  }
};

export const useFormSubmission = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (
    values: PostUserPayload,
    { setSubmitting, resetForm }: FormikHelpers<PostUserPayload>
  ) => {
    const user = await getUser(values);
    if (user.code === "error") {
      const msg = getMsgError(user.error);
      setError(msg);
    } else {
      setError(null);
      console.log("succes", user);
    }
    setSubmitting(false);
    resetForm();
    console.log("succes", user);
  };

  return { error, handleSubmit };
};
