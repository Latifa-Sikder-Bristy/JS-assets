const shoppingCaart = [
    //array of object
    {item: 'shoe', price: 1200, qty: 2},
    {item: 'shirt', price: 2200, qty: 5},
    {item: 'pant', price: 3200, qty: 4},
    {item: 'belt', price: 700, qty: 3},
];

function totalCost(products){

    let sum = 0;

    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.qty;
        sum = sum + productTotal;
        // console.log(product);
    }
    return sum;
}

const expences = totalCost(shoppingCaart);
console.log('Today', expences);
