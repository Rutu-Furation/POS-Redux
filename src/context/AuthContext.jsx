import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (credentials) => {
    setUser(credentials);
    localStorage.setItem("user", JSON.stringify(credentials));
    // console.log(credentials);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
