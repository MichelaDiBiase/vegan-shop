
export const dataCart =  {
    cart: []
}

export function createLocalStorageCart(e) {
    e.preventDefault();

    if(!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify(dataCart.cart));
    }
}

export function setToLocalStorageCart() {
    localStorage.setItem('cart', JSON.stringify(dataCart.cart));
    console.log(dataCart.cart);
}

export function addProductToCart(product) {
    dataCart.cart.push(product);
    setToLocalStorageCart();
}