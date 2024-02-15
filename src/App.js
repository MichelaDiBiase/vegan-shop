import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AlternativaLatte from './pages/AlternativaLatte';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {

  const login = localStorage.getItem("isLogedIn");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AlternativaLatte" element={login ? <AlternativaLatte /> : <Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
