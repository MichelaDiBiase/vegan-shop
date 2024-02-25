import React from 'react';
import Navbar from '../components/navbar.js';
import Header from '../components/header.js';
import Advertising from '../components/advertising.js';
import CardCategory from '../components/cardCategory.js';
import dataCategory from '../../backend/dataCategory.js';

function Home() {

    return (
      <div>
        <Navbar />
        <Advertising/>
        <Header />
        <div className="row">
          {dataCategory.map(card => (
            <CardCategory
              key={card.id}
              alimento={card.alimento}
              immagine={card.immagine}
              link={card.link}
            />
          ))}
        </div> 
      </div>
    );
}

export default Home;
