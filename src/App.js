import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AlternativaLatte from './pages/AlternativaLatte';
import Login from './pages/Login';
import SignIn from './pages/SignIn';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="AlternativaLatte" element={<AlternativaLatte />} />
          <Route path="Login" element={<Login />} />
          <Route path="SignIn" element={<SignIn />} />
        </Routes>
    </BrowserRouter>
    );
  }
}

export default App;
