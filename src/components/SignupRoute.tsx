import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { SignupFormContainer } from "./Form/Signup/SignupFormContainer";

export const SignupRoute = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <SignupFormContainer />;
};
