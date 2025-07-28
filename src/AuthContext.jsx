import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("userLoggedIn");
    return saved ? JSON.parse(saved) : null;
  });
  

  useEffect(() => {
    if (user) {
      localStorage.setItem("userLoggedIn", JSON.stringify(user));
    } else {
      localStorage.removeItem("userLoggedIn");
    }
  }, [user]);
  
  
  const login = (Email, Password) => {
    const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
    const foundUser = storedUsers.find(u => u.Email === Email && u.Password === Password);
    if (foundUser) {
      setUser(foundUser);
    
      return { success: true, user: foundUser };
    };
    return { success: false };
  };
  
    const logout = () => {
      setUser(null);
    };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
