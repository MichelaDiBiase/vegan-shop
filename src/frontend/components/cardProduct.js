import React, { Component } from 'react';

class CardProduct extends Component {

  render() {
    return (
      <div className="col">
        <div className="listProduct">
          <div className="item">
            <img src={this.props.immagine} className="card-img-top" alt="..." />
          <div className="card-body">
          <h2> {this.props.alimento}</h2>
          <div className="price">€ {this.props.prezzo},00</div>
            <button className="product-button btn btn-success" onClick={this.props.handleClick}>Aggiungi al carrello</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}



export default CardProduct;