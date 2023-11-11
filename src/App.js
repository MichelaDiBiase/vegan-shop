import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AlternativaLatte from './pages/AlternativaLatte';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="AlternativaLatte" element={<AlternativaLatte />} />
        </Routes>
    </BrowserRouter>
    );
  }
}

export default App;
