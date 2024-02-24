import React from 'react';
import { Link } from 'react-router-dom';

function CardProduct(props) {

  const{ product } = props;

  function addToCart(e) {
    e.preventDefault();

    console.log("Aggiunto al carrello");
  }

  return (
    <div className="col">
      <div className="listProduct">
        <div className="item">
          <img src={product.immagine} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2> {product.alimento}</h2>
          <div className="price">€ {product.prezzo},00</div>
            <Link to={document.cookie ? null : "/login"}>
              <button className="product-button btn btn-success" onClick={document.cookie ? addToCart : null}>Aggiungi al carrello</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



export default CardProduct;