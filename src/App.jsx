import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Users/Login";
import Registration from "./components/Users/Resister";
import Dashboard from "./components/Users/Dashboard";
import PublicNavbar from "./components/navbar/Public.navbar";
import PrivateNavbar from "./components/navbar/Private.navbar";
import Home from "./components/Pages/Home";
import Navbar from "./components/Pages/Navbar.jsx";
import { useAuth } from "./components/Users/Authcontext.jsx";

export default function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <BrowserRouter>
        {isAuthenticated ? <PrivateNavbar/> : <PublicNavbar/>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar1" element={<Navbar />} />
          <Route path="/navbar" element={<PrivateNavbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
