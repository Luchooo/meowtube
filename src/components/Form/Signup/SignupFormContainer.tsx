import { Formik } from "formik";
import { SignupForm } from "./SignupForm";
import { signUpSchema } from "../../../schemas/signUp";
import { useFormSubmission } from "../../../hooks/useFormSubmission";
import { ApiSignUpUser } from "../../../api/users/sign-up";
import { UserSignUpPayload } from "../../../types";
import { getAvatarUrlRandom } from "../../../utils/getAvatarUrlRandom";

export const SignupFormContainer = () => {
  const { handleSubmit } = useFormSubmission<UserSignUpPayload>(ApiSignUpUser);

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        avatarUrl: getAvatarUrlRandom(),
      }}
      validationSchema={signUpSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => <SignupForm {...formikProps} />}
    </Formik>
  );
};
