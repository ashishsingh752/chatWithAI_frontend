import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Users/Login";
import Registration from "./components/Users/Resister";
import Dashboard from "./components/Users/Dashboard";
import PublicNavbar from "./components/navbar/Public.navbar";
import PrivateNavbar from "./components/navbar/Private.navbar";


export default function App() {
  return <>
  <BrowserRouter>
  <PrivateNavbar />
  <Routes>
     
     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Registration/>}/>
     <Route path="/dashboard" element={<Dashboard/>}/>
  </Routes>
  </BrowserRouter>;
  </>
}
