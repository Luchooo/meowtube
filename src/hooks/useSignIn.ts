import { API_BASE_URL } from "../constants";
import { User } from "../types";
import { useEffect, useState } from "react";

export const useSignIn = () => {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchUser = async () => {
      setStatus("loading");
      try {
        const response = await fetch(`${API_BASE_URL}/api/users/sign-in`);
        const data: User = await response.json();
        setUser(data);
        setStatus("success");
      } catch (error) {
        console.log(error);
        setStatus("error");
      }
    };
    fetchUser();
  }, []);

  return { user, status };
};
