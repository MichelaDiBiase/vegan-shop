export const dataCart =  {
    cart: []
}

function setCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(dataCart.cart));
}

export function addProductToCart(product) {
    if(!dataCart.cart.find(p => p.id===product.id))
    {
        dataCart.cart.push(product);
        setCartToLocalStorage();
    }
}

export function removeProductFromCart(product) {
    dataCart.cart.splice(dataCart.cart.findIndex(p => p.id===product.id), 1);
    setCartToLocalStorage();
}

export function removeAllProductsFromCart() {
    dataCart.cart = [];
    setCartToLocalStorage();
}