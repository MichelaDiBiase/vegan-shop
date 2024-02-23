import React from 'react';
import Navbar from '../components/navbar.js';
import Header from '../components/header.js';
import Advertising from '../components/advertising.js';
import CardProduct from '../components/cardProduct.js';
import dataProduct from '../../backend/dataProduct.js';

function AlternativaDolci() {

  return (
    <div className="body-style">
      <Navbar />
      <Advertising/>
      <Header />
      <div className="row">
        {dataProduct.sweetProducts.map(card => (
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

export default AlternativaDolci;
