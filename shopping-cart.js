

// Export module

//console.log('Shopping');

const shoppingCost = 20;
const cart = [];

export const addItemToCard = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${product} added quantity ${quantity} in cart`);
}

const totalPrice = 500;
const totalQuantity = 10;
export {totalPrice, totalQuantity as quantity};