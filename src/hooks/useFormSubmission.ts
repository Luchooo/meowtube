import { FormikHelpers } from "formik";
import { PostUserPayload } from "../types";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { ApiSignInUser } from "../api/users/sign-in";
import { getMsgAxiosError } from "../utils/getMsgAxiosError";
import { useAlert } from "./useAlert";
import { useMutation } from "@tanstack/react-query";

export const useFormSubmission = () => {
  const { handleUser } = useAuth();
  const { showAlert } = useAlert();
  const navigate = useNavigate();
  const signInMutation = useMutation({ mutationFn: ApiSignInUser });

  const handleSubmit = async (
    values: PostUserPayload,
    { setSubmitting }: FormikHelpers<PostUserPayload>
  ) => {
    try {
      const res = await signInMutation.mutateAsync(values);
      if (res.code === "error") {
        const msg = getMsgAxiosError(res.error);
        showAlert({ msg, type: "error" });
      } else {
        showAlert({ msg: `Welcome ${res.data.username}`, type: "success" });
        handleUser(res.data);
        navigate("/", { replace: true });
      }
    } catch (error) {
      showAlert({ msg: getMsgAxiosError(error), type: "error" });
    } finally {
      setSubmitting(false);
    }
  };

  return { handleSubmit };
};
