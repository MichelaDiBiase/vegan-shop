import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardProduct extends Component {

  render() {
    return (
          <div className="col">
            <div className="listProduct">
              <div className="item">
              <Link to={this.props.link}>
                <img src={this.props.immagine} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h2> {this.props.alimento}</h2>
                <Link to={this.props.link}>
                    <button className="category-button btn btn-success">Scopri di più</button>
                </Link>
              </div>
            </div>
            </div>
          </div>

    );
  }
}



export default CardProduct;