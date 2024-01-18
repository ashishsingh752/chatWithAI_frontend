import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Users/Login";
import Registration from "./components/Users/Resister";
import Dashboard from "./components/Users/Dashboard";

export default function App() {
  return <BrowserRouter>
  <Routes>
     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Registration/>}/>
     <Route path="/dashboard" element={<Dashboard/>}/>
  </Routes>
  </BrowserRouter>;
}
