const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 165000},
]

//map 
const names = products.map(products => products.name)
// console.log(names)
const prices = products.map(p => p.price)
// console.log(prices)

//forEach
products.forEach(p => console.log(p.id))

//filter
const expensive = products.filter(p => p.price > 50000)
// console.log(expensive)

//find
const affortable = products.find(p => p.price < 50000)
// console.log(affortable)

//reduce
const total = products.reduce((accum, current) => accum + current.price, 0)
console.log(total)

