import React from 'react';
import { Link } from 'react-router-dom';
import CardProduct from '../components/cardProduct.js';
import { dataCart } from '../../backend/dataCart.js';

function Cart() {

  return (
    <div>
    <div className="row">
    { dataCart.cart.map(card => (
      <CardProduct
        key={card.id}
        alimento={card.alimento}
        immagine={card.immagine}
        prezzo={card.prezzo}
      />
      ))}
    </div>

      <div className="btn">
        <Link className="nav-button" to='/'>
          <button type="button" className="btn btn-success">
            CHIUDI
          </button>
        </Link>
        <button type="button" className="btn btn-success">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;