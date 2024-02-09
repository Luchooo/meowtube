import { Formik } from "formik";
import { LoginForm } from "./LoginForm";
import { signInSchema } from "../../schemas/signIn";
import { useFormSubmission } from "../../hooks/useFormSubmission";
import { Alert } from "../ui/Alert";
import { useAutoHideAlert } from "../../hooks/useAutoHideAlert";

export const LoginFormContainer = () => {
  const { error, handleSubmit } = useFormSubmission();
  const showAlert = useAutoHideAlert({ error });

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signInSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => <LoginForm {...formikProps} />}
      </Formik>
      {showAlert && (
        <div className="flex items-center justify-center">
          <Alert type="error">{error}</Alert>
        </div>
      )}
    </>
  );
};
