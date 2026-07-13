import { createContext, useState } from "react";

export const AuthDataContext = createContext(null);

export const AuthContext = ({ children }) => {
  const CurrentUserEmail = localStorage.getItem("CurrentUserEmail");
  const [user, setUser] = useState(
    CurrentUserEmail ? { email: CurrentUserEmail } : null,
  );

  const signup = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === email)) {
      return { success: false, error: "Email already exists" };
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("CurrentUserEmail", email);

    setUser({ email });

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

    localStorage.setItem("CurrentUserEmail", email);

    setUser({ email });
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("CurrentUserEmail");
    setUser(null);
  };

  return (
    <AuthDataContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthDataContext.Provider>
  );
};

export default AuthContext;
