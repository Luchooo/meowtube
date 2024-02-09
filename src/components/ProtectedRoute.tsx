import { PropsWithChildren, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

type ProtectedRouteProps = PropsWithChildren;

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/", { replace: true });
    }
  }, [navigate, user]);

  return children ? children : <Outlet />;
};
