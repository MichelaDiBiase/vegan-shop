import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AlternativaCarne from './pages/AlternativaCarne';
import AlternativaFormaggi from './pages/AlternativaFormaggi';
import AlternativaDolci from './pages/AlternativaDolci';
import AlternativaLatte from './pages/AlternativaLatte';
import Login from './pages/Login';
import SignUp from './pages/SignUp';



function App() {

  const login = localStorage.getItem("isLogedIn");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AlternativaCarne" element={login ? <AlternativaCarne /> : <Login />} />
        <Route path="AlternativaFormaggi" element={login ? <AlternativaFormaggi /> : <Login />} />
        <Route path="AlternativaDolci" element={login ? <AlternativaDolci /> : <Login />} />
        <Route path="AlternativaLatte" element={login ? <AlternativaLatte /> : <Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
