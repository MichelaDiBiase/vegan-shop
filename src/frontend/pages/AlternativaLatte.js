import React from 'react';
import Navbar from '../components/navbar.js';
import Header from '../components/header.js';
import Advertising from '../components/advertising.js';
import CardProduct from '../components/cardProduct.js';
import dataCard from '../../backend/dataProduct.js';

function AlternativaLatte() {

  return (
    <div className="body-style">
      <Navbar />
      <Advertising />
      <Header />
        <div className="row">
          {dataCard.milkProducts.map(card => (
          <CardProduct
            key={card.id}
            alimento={card.alimento}
            immagine={card.immagine}
            prezzo={card.prezzo}
          />
        ))}
      </div>
    </div> 
  );
}

export default AlternativaLatte;
