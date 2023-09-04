const actor = {
    name: 'ananta',
    age: 45,
    phone: '017948634671',
    money: 948634671
}

//if right side is an object left side of destuctring will be object as well
//use property name as a variable that contains the property value
const {phone} = actor
const {age} = actor
const {phone:num, age: boyos} = actor

/* const phone = actor.phone;
const name = actor.name;
const age = actor.age; */

console.log(phone)
console.log(phone)
console.log(phone)
console.log(age)
console.log(age)
console.log(age)
console.log(num)
console.log(boyos)
// console.log(phone)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(age)
// console.log(age)


//array destructuring
const numbers = [45, 99]
const [first, second] = numbers
const [x, y] = [458, 199];

//
function doubleThem (a, b){
    return [a*2 , b*2]
}
// left size e distructured by array
const [prothom, ditio] = doubleThem(6, 9);
console.log(prothom, ditio)