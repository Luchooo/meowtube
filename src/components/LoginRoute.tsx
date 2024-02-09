import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LoginFormContainer } from "./Login/LoginFormContainer";

export const LoginRoute = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <LoginFormContainer />;
};
