import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import Header from '../components/header.js';
import Advertising from '../components/advertising.js';
import Card from '../components/card.js';
import ricottaDiMandorle from '../img/ricotta.jpg';
import pistacchino from '../img/formaggioPistacchio.png';
import mozzarella from '../img/Mozarelle.jpg';
import biscotti from '../img/biscotti.jpg'

class AlternativaFormaggi extends Component {
  state = {
    card: [
      { id: 0, alimento: 'Ricotta di mandorle', immagine: ricottaDiMandorle, button: 'Aggiungi al carello', link:'#' },
      { id: 1, alimento: 'Pistacchino', immagine: pistacchino, button: 'Aggiungi al carello', link:'#' },
      { id: 2, alimento: 'Mozzarelle', immagine: mozzarella, button: 'Aggiungi al carello', link:'#' },
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

export default AlternativaFormaggi;
