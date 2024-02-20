import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
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
                <div className="price">{this.props.prezzo}</div>
                <Link to={this.props.link} className="btn btn-success">{this.props.button}</Link>
              </div>
            </div>
            </div>
          </div>

    );
  }
}



export default Card;