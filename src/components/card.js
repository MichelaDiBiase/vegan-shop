import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
          <div className="col">
            <div className="card" style={{ width: '18rem' }}>
              <img src={this.props.immagine} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Alternativa {this.props.alimento}</h5>
                <a href="#" className="btn btn-success">Scopri di più</a>
              </div>
            </div>
          </div>

    );
  }
}

export default Card;