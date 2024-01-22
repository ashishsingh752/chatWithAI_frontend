import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Users/Login";
import Registration from "./components/Users/Register.jsx";
import Dashboard from "./components/Users/Dashboard";
import PublicNavbar from "./components/navbar/Public.navbar";
import PrivateNavbar from "./components/navbar/Private.navbar";
import Home from "./components/Pages/Home";
import Navbar from "./components/Pages/Navbar.jsx";
import { useAuth } from "./components/Users/Authcontext.jsx";
import AuthenticatedUser from "./Protected/AuthenticatedUser.jsx";

export default function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <BrowserRouter>
        {isAuthenticated ? <PrivateNavbar /> : <PublicNavbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route
            path="/dashboard"
            element={
              // showing the users information for the authenticated user only
              <AuthenticatedUser>
                <Dashboard />
              </AuthenticatedUser>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
