import React, { useState } from 'react';
import { removeProductFromCart } from '../../backend/dataCart';

function CardProductForCart(props) {

  const{ product } = props;
  const [quantity, setQuantity] = useState(1);

  function removeFromCart(e) {
    e.preventDefault();

    removeProductFromCart(product);
  }

  function incrementQuanity(e) {
    e.preventDefault();

    if(quantity < 10) {
      setQuantity(quantity+1);
    }
  }

  function decrementQuanity(e) {
    e.preventDefault();

    if(quantity > 1) {
      setQuantity(quantity-1);
    }
  }

  return (
    <div className="col">
      <div className="listProduct">
        <div className="item">
          <img src={product.immagine} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2> {product.alimento}</h2>
            <div className="prduct-price">
                <span>€ {product.prezzo*quantity},00</span>
            </div>
            <div className="product-quantity btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" className="btn btn-outline-success" onClick={decrementQuanity}>-</button>
              <span className="value-quantity-product form-control">{quantity}</span>
              <button type="button" className="btn btn-outline-success" onClick={incrementQuanity}>+</button>
            </div>
            <button className="product-button btn btn-success" onClick={document.cookie ? removeFromCart : null}>Elimina</button>
          </div>
        </div>
      </div>
    </div>
  );
}



export default CardProductForCart;