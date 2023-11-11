import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    return (
          <div className="col">
            <div className="card" style={{ width: '18rem' }}>
              <Link to={this.props.link}>
                <img src={this.props.immagine} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Alternativa {this.props.alimento}</h5>
                <Link to={this.props.link} className="btn btn-success">{this.props.button}</Link>
              </div>
            </div>
          </div>

    );
  }
}

export default Card;