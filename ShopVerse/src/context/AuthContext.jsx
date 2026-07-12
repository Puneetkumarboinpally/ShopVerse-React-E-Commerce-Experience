import { createContext } from "react";

const authContext = createContext;

export function AuthContext() {
  <AuthContextProvider>{authContext}</AuthContextProvider>;
}
