import { Formik } from "formik";
import { LoginForm } from "./LoginForm";
import { signInSchema } from "../../../schemas/signIn";
import { useFormSubmission } from "../../../hooks/useFormSubmission";
import { ApiSignInUser } from "../../../api/users/sign-in";
import { UserSigninPayload } from "../../../types";

export const LoginFormContainer = () => {
  const { handleSubmit } = useFormSubmission<UserSigninPayload>(ApiSignInUser);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={signInSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => <LoginForm {...formikProps} />}
    </Formik>
  );
};
