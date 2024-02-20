import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let iconCart=document.querySelector('.icon-cart');
let closeCart=document.querySelector('.close');
let body=document.querySelector('.body');

iconCart.addEventListener('click',()=>{
    body.classList.toggle('showCart')
})
closeCart.addEventListener('click',()=>{
    body.classList.toggle('showCart')
})


class ShoppinCart extends Component {

  render() {
    return (
          <div className="cartTab">
            <h1>
                Carello
            </h1>
            <div className="listCart">
                <div className="item">
                    <div className="image">

                    </div>
                    <div className="name">
                        
                    </div>
                    <div className="totalPrice">
                        
                    </div>
                    <div className="quantity">
                        <span className='minus'>-</span>
                        <span>1</span>
                        <span className='plus'>+</span>
                    </div>
                </div>
            </div>
            <div className="btn">
                    <button type="button" className="btn btn-success">
                        CHIUDI
                    </button>
                    <button type="button" className="btn btn-success">
                        CHECKOUT
                    </button>        
            </div>
      </div>


    );
  }
}



export default ShoppinCart;