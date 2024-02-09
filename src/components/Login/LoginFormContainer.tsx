import { Formik } from "formik";
import { LoginForm } from "./LoginForm";
import { signInSchema } from "../../schemas/signIn";
import { useFormSubmission } from "../../hooks/useFormSubmission";

export const LoginFormContainer = () => {
  const { error, handleSubmit } = useFormSubmission();

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signInSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => <LoginForm {...formikProps} />}
      </Formik>
      {error && <div className="bg-red-200 text-red-800 p-2 mb-4">{error}</div>}
    </>
  );
};
