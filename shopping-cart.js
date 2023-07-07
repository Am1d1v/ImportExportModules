

// Export module

//console.log('Shopping');

const shoppingCost = 20;
export const cart = [];

export const addItemToCard = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${product} added quantity ${quantity} in cart`);
}

const totalPrice = 500;
const totalQuantity = 10;
export {totalPrice, totalQuantity as quantity};


/*

export default function(product){
    console.log(product);
}

*/

console.log(cart);

const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);