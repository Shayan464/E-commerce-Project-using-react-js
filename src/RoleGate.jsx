import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function RoleGate({ allowedRoles }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/"  />;

     if (!allowedRoles.includes(user.Type)) {
    return <Navigate to="/"/>;
  }
else{
  return <Outlet />;
}
}
