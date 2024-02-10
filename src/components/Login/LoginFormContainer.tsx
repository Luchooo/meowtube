import { Formik } from "formik";
import { LoginForm } from "./LoginForm";
import { signInSchema } from "../../schemas/signIn";
import { useFormSubmission } from "../../hooks/useFormSubmission";

export const LoginFormContainer = () => {
  const { handleSubmit } = useFormSubmission();

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signInSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => <LoginForm {...formikProps} />}
      </Formik>
    </>
  );
};
