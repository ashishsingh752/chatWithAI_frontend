import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

export default function App() {
  return <BrowserRouter>
  <Routes>
     <Route path="/login" element={<Login/>}/>
     <Route path="/login" element={<Registration/>}/>
  </Routes>
  </BrowserRouter>;
}
