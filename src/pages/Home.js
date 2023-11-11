import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import Header from '../components/header.js';
import Advertising from '../components/advertising.js';
import carne from '../img/alternativaCarne.webp';
import formaggi from '../img/alternativaFormaggi.webp';
import dolci from '../img/alternativaDolci.jpg';
import latte from '../img/alternativaLatte.jpg';
import biscotti from '../img/biscotti.jpg';
import Card from '../components/card.js';

class Home extends Component {
  state = {
    card: [
      { id: 0, alimento: 'Carne', immagine: carne, button:'Scopri di più', link:'#' },
      { id: 1, alimento: 'Formaggi', immagine: formaggi, button:'Scopri di più', link:'#' },
      { id: 2, alimento: 'Dolci', immagine: dolci, button:'Scopri di più', link:'#' },
      { id: 3, alimento: 'Latte', immagine: latte, button:'Scopri di più', link:'/AlternativaLatte' }
    ],
    advertising: [
      { id: 0, titolo: 'Novità', descrizione: 'Biscotti natalizi', disponibilita: 'disponibili dal primo dicembre', immagine: biscotti }
    ]
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
        <div className="row">
          {this.state.advertising.map(advertising => (
            <Advertising
              key={advertising.id}
              titolo={advertising.titolo}
              descrizione={advertising.descrizione}
              disponibilita={advertising.disponibilita}
              immagine={advertising.immagine}
            />
          ))}
        </div>
       
        <Header />
        <div className="row">
          {this.state.card.map(card => (
            <Card
              key={card.id}
              alimento={card.alimento}
              immagine={card.immagine}
              button={card.button}
              link={card.link}
            />
          ))}
        </div>
      </div> 
      </>
    );
  }
}

export default Home;
