import React, { Component } from 'react';

class Advertising extends Component {
  render() {
    return (
      <div className="container">
        <div className="card bg-dark text-white">
          <img src={this.props.immagine} className="card-img" alt="..." />
          <div className="card-img-overlay">
            <h5 className="card-title">{this.props.titolo}</h5>
            <p className="card-text">{this.props.descrizione}</p>
            <p className="card-text">{this.props.disponibilita}</p>
          </div>
        </div>
      </div>
    );
  }
} 
  export default Advertising;
  