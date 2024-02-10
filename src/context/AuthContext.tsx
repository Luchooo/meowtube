import { createContext, PropsWithChildren, useState } from "react";
import { PostUserResponse } from "../types";

type AuthContextType = {
  user: PostUserResponse | null;
  handleUser: (user: PostUserResponse | null) => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  handleUser: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<PostUserResponse | null>(null);

  const handleUser = (user: PostUserResponse | null) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, handleUser }}>
      {children}
    </AuthContext.Provider>
  );
};
