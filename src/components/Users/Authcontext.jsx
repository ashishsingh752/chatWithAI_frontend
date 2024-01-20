import { createContext, useContext, useEffect, useState } from "react";
import { checkUserAuth } from "../../apis/user/user.api";
import { useQuery } from "@tanstack/react-query"; //use to make the request(query) at the end point

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // making  the query
  const { isError, isLoading, data, isSuccess } = useQuery({
    queryFn: checkUserAuth,
    queryKey: ["checkAuthetication"], // it will help to refetch in case query key changes
  });

  useEffect(() => {
    if (isSuccess) {
      setIsAuthenticated(true);
    }
  }, [isSuccess]);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoading, isSuccess, isError, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// making the custom hook to destructure the value

export const useAuth = () => {
  return useContext(AuthContext);
};
