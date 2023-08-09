const shoppingCaart = [
    //array of object
    {item: 'shoe', price: 1200},
    {item: 'shirt', price: 2200},
    {item: 'pant', price: 3200},
    {item: 'belt', price: 700}
];

function totalCost(products){

    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;
        // console.log(product);
    }
    return sum;
}

const expences = totalCost(shoppingCaart);
console.log('Today', expences);
