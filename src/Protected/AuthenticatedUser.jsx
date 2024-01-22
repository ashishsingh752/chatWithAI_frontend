import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../components/Users/Authcontext";
import AuthChecking from "../alert/authChecking";

const AuthenticatedUser = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated, isLoading, isError } = useAuth();

  if (isLoading) {
    return <AuthChecking/>;
  }
  if (isError || isAuthenticated===false) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AuthenticatedUser;
