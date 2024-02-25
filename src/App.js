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
import Account from './frontend/pages/Account';
import ModifyAccount from './frontend/pages/ModifyAccount';
import ModifyPassword from './frontend/pages/ModifyPassword';
import DeletingAccount from './frontend/pages/DeletingAccount';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="alternativaCarne" element={<AlternativaCarne />} />
        <Route path="alternativaFormaggi" element={<AlternativaFormaggi/>}/>
        <Route path="alternativaDolci" element={<AlternativaDolci />}/>
        <Route path="alternativaLatte" element={<AlternativaLatte />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="account" element={<Account />} />
        <Route path="updateAccount" element={<ModifyAccount />} />
        <Route path="updatePassword" element={<ModifyPassword />} />
        <Route path="deleteAccount" element={<DeletingAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
