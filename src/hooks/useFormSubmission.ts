import { FormikHelpers } from "formik";
import { User } from "../types";
import { useAuth } from "./useAuth";
import { useAlert } from "./useAlert";
import { useMutation } from "@tanstack/react-query";
import { localStorage } from "../utils/localStorage";

const { setItem } = localStorage("user");

export const useFormSubmission = <T>(ApiUsers: {
  (formData: T): Promise<User>;
}) => {
  const { handleUser } = useAuth();
  const { showAlert } = useAlert();
  const mutation = useMutation({ mutationFn: ApiUsers });

  const handleSubmit = async (
    values: T,
    { setSubmitting }: FormikHelpers<T>
  ) => {
    try {
      const user = await mutation.mutateAsync(values);
      showAlert({ msg: `Welcome ${user.username}`, type: "success" });
      handleUser(user);
      setItem<User>(user);
    } catch (error) {
      const msg =
        error instanceof Error
          ? error.message
          : "Unknow error with users request";
      showAlert({ msg, type: "error" });
    } finally {
      setSubmitting(false);
    }
  };

  return { handleSubmit };
};
