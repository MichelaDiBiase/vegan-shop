import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CardProductForCart from '../components/cardProductForCart.js';
import { dataCart } from '../../backend/dataCart.js';
import Navbar from '../components/navbar.js';
import { removeAllProductsFromCart } from '../../backend/dataCart.js';

function Cart() {

  let navigate = useNavigate();

  function emptyCart(e) {
    e.preventDefault();

    removeAllProductsFromCart();
    navigate("/");
    console.log("Acquisto effettuato");
  }

  return (
    <div className="cart-class">
      <Navbar />
      <div className="cart">
        <h2 className="cart-title">IL TUO CARRELLO</h2>
        <div className="cart-border border border-success">
          <div className="row">
            { dataCart.cart.map(product => (
              <CardProductForCart
                key={product.id}
                product={product}
              />
              ))}
          </div>
        </div>
        <div className="cart-buttons">
          <Link className="cart-closed-button" to='/'>
            <button type="button" className="btn btn-success">
              CHIUDI
            </button>
          </Link>
          <button type="button" onClick={emptyCart} className="btn btn-success">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;