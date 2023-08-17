// const numbers = [45, 43, 22, 78, 55];

/* for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
} */

// array element of array
//easy way too loop
//for off loop
/* for(const number of numbers){
    console.log(number);
} */

const products = [
    {id: 1, name: 'xiami phone', price: 19000},
    {id: 2, name: 'iphone', price: 119000},
    {id: 3, name: 'macbook', price: 140000},
    {id: 4, name: 'lenovo', price: 19000},
    {id: 5, name: 'Dell', price: 70000},
    {id: 6, name: 'Sumsang', price: 19000},
    {id: 7, name: 'oppo phone', price: 14000},
    {id: 8, name: 'Nokia', price: 19000},
    {id: 9, name: 'HTC phone', price: 45000},
    {id: 10, name: 'Oneplus phone', price: 54000}
];

//const singular of plural
/* for(const product of products){
    console.log(product);
} */

function matchProducts (products, search){
    //store muiltiple things in a array
    const matched = [];
    for(const product of products){
        //to check string inside string (substring)
        // indexOf() or includes() return boolean
        /* if(products.name.includes(search)){
            matched.push(product);
        } */
        if(product.name.includes(search)){
            matched.push(product);
        }
        console.log(product.name.toLowerCase().includes(search));
    }
    return matched;
}

const result = matchProducts(products, 'phone');
console.log(result);
//by default return undefined