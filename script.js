

//Import module shoppind-cart



import './shopping-cart.js'
import {
        addItemToCard,
        totalPrice as price,
        quantity,
        cart
    } from './shopping-cart.js'
 
  

import * as shoppingCart from './shopping-cart.js'
//import displayProductName from './shopping-cart.js'

/*

addItemToCard('Milk', 3);
console.log(price);
console.log(quantity);
*/


shoppingCart.addItemToCard('Milk', 3);
shoppingCart.addItemToCard('Chocolate', 10);
shoppingCart.addItemToCard('Coffee', 1);
//displayProductName('Cake');

console.log(shoppingCart.cart);