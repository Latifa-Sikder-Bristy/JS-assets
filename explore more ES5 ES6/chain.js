//data access
const data = [{id:3, name: 'abul', address: 'kochukhet'}]

// console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        {id: 1, name:'iphone', price: 65000, model: 'es6'},
        {id: 2, name:'mac', price: 1650000, model: 'm1'},
        {id: 3, name:'lenevo', price: 6500, model: 'model x'},
    ]
}

//second way
// console.log(products.data[1].price);

const user = {
    id: 5001,
    name: 'Shoriful raj',
    address: {
        street: {
            first: '33/A lake circus',
            second: 'kolabagan',
            third: 'no dorai',
        },
        city: 'Dhaka'
    }   
}
console.log(user.address.street.second);



const user2 = {
    id: 5001,
    name: 'Shoriful raj',
    address: {
        first: '33/A lake circus',
        second: 'kolabagan',
        third: 'no dorai',
        city: 'Dhaka'
    }   
}
//Optional chaining used by ?
console.log(user2.address.street?.second);