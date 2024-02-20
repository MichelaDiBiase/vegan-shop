import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import Header from '../components/header.js';
import Advertising from '../components/advertising.js';
import Card from '../components/card.js';
import carne3D from '../img/Redefine-Beef-Flank.webp';
import burger from '../img/burger.jpg';
import macinato from '../img/Mince-850g-BG.jpg';
import biscotti from '../img/biscotti.jpg'

class AlternativaCarne extends Component {
  state = {
    card: [
      { id: 0, alimento: 'Beef 3D', immagine: carne3D, button: 'Aggiungi al carello',prezzo:'9,00 kg', link:'#' },
      { id: 1, alimento: 'Burger di barbabietola', immagine: burger, button: 'Aggiungi al carello',prezzo:'9,00 kg', link:'#' },
      { id: 2, alimento: 'Macinato vegano', immagine: macinato, button: 'Aggiungi al carello',prezzo:'9,00 kg', link:'#' }
      
    ],
    advertising: [
      { id: 0, titolo: 'Novità', descrizione: 'Biscotti natalizi', disponibilita: 'disponibili dal primo dicembre', immagine: biscotti }
    ]
  }

  render() {
    return (
      <body>
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
      </body>
    );
  }
}

export default AlternativaCarne;
