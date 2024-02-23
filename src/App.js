import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './frontend/pages/Home';
import AlternativaCarne from './frontend/pages/AlternativaCarne';
import AlternativaFormaggi from './frontend/pages/AlternativaFormaggi';
import AlternativaDolci from './frontend/pages/AlternativaDolci';
import AlternativaLatte from './frontend/pages/AlternativaLatte';
import Cart from './frontend/pages/Cart';
import Login from './frontend/pages/Login';
import SignUp from './frontend/pages/SignUp';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AlternativaCarne" element={<AlternativaCarne />} />
        <Route path="AlternativaFormaggi" element={<AlternativaFormaggi/>}/>
        <Route path="AlternativaDolci" element={<AlternativaDolci />}/>
        <Route path="AlternativaLatte" element={<AlternativaLatte />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
