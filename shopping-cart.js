

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


// Global await

/*

const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);

console.log('Some text');

*/

const getLastPost = async function(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);

    return {title: data.at(-1).title}
}

const lastPostData = getLastPost();
console.log(lastPostData);
lastPostData.then(data => console.log(data));

const lastPostData1 = await getLastPost();
console.log(lastPostData1);
