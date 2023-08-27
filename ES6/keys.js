const glass = {
    //property or obj of keys : value 
    name: 'glass', 
    color: 'golden', 
    price: 12, 
    isCleaned: true
};

console.log(glass);
//all properties name
// const keys = Object.keys(glass);
//all properties value
// const values = Object.values(glass);
// console.log(values);

//all properties name value pair
const pairEntries = Object.entries(glass);
// console.log(pairEntries);

// array of array, two dimentional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
// ]


//remove from obj
delete glass.isCleaned;
console.log(glass);

//destructuring delete
const {color, ...shortGlass} = glass;
console.log(shortGlass);

//freeze
// Object.freeze(glass);
glass.source = 'Bangladesh';    //add obj property
console.log(glass);

//seal
Object.seal(glass);
glass.price = 5000;
console.log(glass);