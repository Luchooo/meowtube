import { createContext, PropsWithChildren, useState } from "react";

import { PostUserResponse } from "../types";

export const AuthContext = createContext<PostUserResponse | null>(null);

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean;
};

export const AuthProvider = ({ children, isSignedIn }: AuthProviderProps) => {
  const [user] = useState<PostUserResponse | null>(
    isSignedIn ? { id: 1, token: "", username: "" } : null
  );

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
