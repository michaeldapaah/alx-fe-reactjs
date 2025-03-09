import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true"; // Simulated auth check
};

function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
