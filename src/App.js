import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AlternativaCarne from './pages/AlternativaCarne';
import AlternativaFormaggi from './pages/AlternativaFormaggi';
import AlternativaDolci from './pages/AlternativaDolci';
import AlternativaLatte from './pages/AlternativaLatte';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import ModifyAccount from './pages/ModifyAccount';
import ModifyPassword from './pages/ModifyPassword';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="alternativaCarne" element={document.cookie ? <AlternativaCarne /> : <Login />} />
        <Route path="alternativaFormaggi" element={document.cookie ? <AlternativaFormaggi /> : <Login />} />
        <Route path="alternativaDolci" element={document.cookie ? <AlternativaDolci /> : <Login />} />
        <Route path="alternativaLatte" element={document.cookie ? <AlternativaLatte /> : <Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="account" element={<Account />} />
        <Route path="updateAccount" element={<ModifyAccount />} />
        <Route path="updatePassword" element={<ModifyPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
