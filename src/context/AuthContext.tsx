import { createContext, PropsWithChildren, useState } from "react";
import type { User } from "../types";
import { localStorage } from "../utils/localStorage";

const { getItem } = localStorage("user");

type AuthContextType = {
  user: User | null;
  handleUser: (user: User | null) => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  handleUser: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const userLocal = getItem<User>();
  const [user, setUser] = useState<User | null>(userLocal);

  const handleUser = (user: User | null) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, handleUser }}>
      {children}
    </AuthContext.Provider>
  );
};
