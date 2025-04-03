import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { user } = useAuth(); // Get the authenticated user

  return user ? <Outlet /> : <Navigate to="/login"  />;
};

export default ProtectedRoute;
