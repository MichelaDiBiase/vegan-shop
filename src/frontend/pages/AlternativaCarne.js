import React from 'react';
import Navbar from '../components/navbar.js';
import Header from '../components/header.js';
import Advertising from '../components/advertising.js';
import CardProduct from '../components/cardProduct.js';
import dataProduct from '../../backend/dataProduct.js';


function AlternativaCarne() {

  return (
    <div className="body-style">
      <Navbar />
      <Advertising />
      <Header />
        <div className="row">
          {dataProduct.meetProducts.map(product => (
            <CardProduct
              key={product.id}
              product={product}
            />
          ))}
        </div>
    </div>
  );
}

export default AlternativaCarne;
