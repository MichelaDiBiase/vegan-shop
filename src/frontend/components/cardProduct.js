import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardProduct extends Component {

  print(e) {
    e.preventDefault();

    console.log("Aggiunto al carrello");
  }

  render() {
    return (
      <div className="col">
        <div className="listProduct">
          <div className="item">
            <img src={this.props.immagine} className="card-img-top" alt="..." />
          <div className="card-body">
          <h2> {this.props.alimento}</h2>
          <div className="price">€ {this.props.prezzo},00</div>
            <Link to={document.cookie ? null : "/login"}>
              <button className="product-button btn btn-success" onClick={document.cookie ? this.print : null}>Aggiungi al carrello</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
  }
}



export default CardProduct;