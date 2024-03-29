import React from 'react';
import Navbar from '../components/navbar.js';
import Header from '../components/header.js';
import Advertising from '../components/advertising.js';
import CardProduct from '../components/cardProduct.js';
import dataCard from '../../backend/dataProduct.js';

function AlternativaFormaggi() {

  return (
    <div className="body-style">
      <Navbar />
      <Advertising />
      <Header />
      <div className="row">
        {dataCard.cheeseProducts.map(product => (
          <CardProduct
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div> 
  );
}

export default AlternativaFormaggi;
