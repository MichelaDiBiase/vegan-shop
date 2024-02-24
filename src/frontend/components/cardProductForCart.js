import React from 'react';
import { removeProductFromCart } from '../../backend/dataCart';

function CardProduct(props) {

  const{ product } = props;

  function removeFromCart(e) {
    e.preventDefault();

    removeProductFromCart(product)
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
            <button className="product-button btn btn-success" onClick={document.cookie ? removeFromCart : null}>Elimina dal carrello</button>
          </div>
        </div>
      </div>
    </div>
  );
}



export default CardProduct;