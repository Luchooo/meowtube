import { useAuth } from "../hooks/useAuth";
import { localStorage } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

const { removeItem } = localStorage("user");

export const useLogout = () => {
  const { handleUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    handleUser(null);
    removeItem();
    navigate("/public-videos");
  };

  return { handleLogout };
};
