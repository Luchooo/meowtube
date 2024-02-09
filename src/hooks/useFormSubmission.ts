import { FormikHelpers } from "formik";
import { useState } from "react";
import { AxiosError } from "axios";
import { getUser } from "../api/login";
import { PostUserPayload } from "../types";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

const getMsgError = (error: AxiosError | unknown): string => {
  if (error instanceof AxiosError) {
    return error.response?.data.error;
  } else {
    return "Hubo un error al enviar la solicitud.";
  }
};

export const useFormSubmission = () => {
  const [error, setError] = useState<string | null>(null);
  const { handleUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (
    values: PostUserPayload,
    { setSubmitting, resetForm }: FormikHelpers<PostUserPayload>
  ) => {
    const user = await getUser(values);
    if (user.code === "error") {
      const msg = getMsgError(user.error);
      setError(msg);
      resetForm();
    } else {
      setError(null);
      handleUser(user.data);
      navigate("/", { replace: true });
    }
    setSubmitting(false);
  };

  return { error, handleSubmit };
};
