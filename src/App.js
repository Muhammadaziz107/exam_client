import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import Home from "./Pages/Home/home";
import Clinics from "./Components/clinics/clinics";
import Ochered from "./Components/ochered/ochered";
import Types from "./Components/types/types";
function App() {
  return (
    <>
      <div className="App"></div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/types" element={<Types />} />
        <Route path="/clinic" element={<Clinics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ochered" element={<Ochered />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
