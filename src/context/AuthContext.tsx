import { createContext, PropsWithChildren, useState } from "react";
import { PostUserResponse } from "../types";
import { localStorage } from "../utils/localStorage";

const { getItem } = localStorage("user");

type AuthContextType = {
  user: PostUserResponse | null;
  handleUser: (user: PostUserResponse | null) => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  handleUser: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const userLocal = getItem<PostUserResponse>();
  const [user, setUser] = useState<PostUserResponse | null>(userLocal);

  const handleUser = (user: PostUserResponse | null) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, handleUser }}>
      {children}
    </AuthContext.Provider>
  );
};
