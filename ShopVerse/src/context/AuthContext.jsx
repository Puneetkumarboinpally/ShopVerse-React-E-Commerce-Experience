import { createContext, useState } from "react";

export const AuthDataContext = createContext(null);

export const AuthContext = ({ children }) => {
  const CurrentUserName = localStorage.getItem("CurrentUserName");
  const [user, setUser] = useState(
    CurrentUserName ? { name: CurrentUserName } : null,
  );

  const signup = (email, password, name) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === email)) {
      return { success: false, error: "Email already exists" };
    }

    const newUser = { email, password, name };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("CurrentUserName", name);

    setUser({ name });

    return { success: true };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      return { success: false, error: "invalid email or password" };
    }

    localStorage.setItem("CurrentUserName", user.name);

    setUser({ user: user.name });
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("CurrentUserName");
    setUser(null);
  };

  return (
    <AuthDataContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthDataContext.Provider>
  );
};

export default AuthContext;
