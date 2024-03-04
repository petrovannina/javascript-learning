'use strict';
// Exporting module

console.log('Shopping card module imported');

// aceste variabile sunt private si pot fi folosite doar in acest file 
// ca sa le folosim afara trebuie sa folosim export
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(`${product} with ${quantity} added to the cart`);
}

const totalPrice = 237;
totalQuantity = 23;

export { totalPrice, totalQuantity };