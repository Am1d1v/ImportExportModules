

//Import module shoppind-cart

/*

import './shopping-cart.js'
import {
        addItemToCard,
        totalPrice as price,
        quantity,
    } from './shopping-cart.js'
 
*/    

import * as shoppingCart from './shopping-cart.js'
import displayProductName from './shopping-cart.js'

/*

addItemToCard('Milk', 3);
console.log(price);
console.log(quantity);
*/


shoppingCart.addItemToCard('Milk', 3);
displayProductName('Cake');
