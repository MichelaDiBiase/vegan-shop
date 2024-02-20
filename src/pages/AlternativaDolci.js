import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import Header from '../components/header.js';
import Advertising from '../components/advertising.js';
import Card from '../components/card.js';
import tortaMirtilli from '../img/torta_veg_mirtilli.jpg';
import biscottiVeg from '../img/biscottiVeg.jpg';
import brownies from '../img/BROWNIES.jpg';
import tiramisu from '../img/tiramisù.jpg';
import biscotti from '../img/biscotti.jpg'

class AlternativaDolci extends Component {
  state = {
    card: [
      { id: 0, alimento: 'Biscotti', immagine: biscottiVeg, button: 'Aggiungi al carello',prezzo:'9,00 kg', link:'#' },
      { id: 1, alimento: 'Torta ai mirtilli', immagine: tortaMirtilli, button: 'Aggiungi al carello',prezzo:'9,00 kg', link:'#' },
      { id: 2, alimento: 'Brownies', immagine: brownies, button: 'Aggiungi al carello',prezzo:'9,00 kg', link:'#' },
      { id: 3, alimento: 'Tiramisù', immagine: tiramisu, button: 'Aggiungi al carello',prezzo:'9,00 kg', link:'#' },
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
              prezzo={card.prezzo}
              button={card.button}
            />
          ))}
        </div>
      </div> 
      </>
    );
  }
}

export default AlternativaDolci;
