// src/auth/AuthGate.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const AuthGate = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/"/>;
  }
  return <Outlet />;
};

export default AuthGate;
