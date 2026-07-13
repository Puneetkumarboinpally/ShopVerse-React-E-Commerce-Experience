import { createContext, useState } from "react";

export const AuthDataContext = createContext(null);

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  };

  const login = () => {
    console.log("login");
  };

  const logout = () => {
    console.log("logout");
  };

  return (
    <AuthDataContext.Provider value={{ signup, login, logout }}>
      {children}
    </AuthDataContext.Provider>
  );
};

export default AuthContext;
