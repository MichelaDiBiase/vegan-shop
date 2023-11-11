import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import Header from '../components/header.js';
import Advertising from '../components/advertising.js';
import Card from '../components/card.js';
import latteSoia from '../img/latteSoia.webp';
import biscotti from '../img/biscotti.jpg'

class AlternativaLatte extends Component {
  state = {
    card: [
      { id: 0, alimento: 'Latte', immagine: latteSoia, button: 'Aggiungi', link:'#' }
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
            />
          ))}
        </div>
      </div> 
      </>
    );
  }
}

export default AlternativaLatte;
