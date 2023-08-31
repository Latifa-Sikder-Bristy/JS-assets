// var
// let      - block scoop
// const    - block scoop
// 2. default param
// 3. templete string
// 4. arrow fucntion
// 5. destructuring and spread operator
// 6. Object.keys  Object.values  Object.entries ---es6
// 7. for of -- use in array and string
// 8. for in -- use in object


const a = 56;
const numbers = [56, 7, 8]
const person = {
    name: 'sakib khan'
}

const message = `Hi, ${person.name} has a:${a} access to ${numbers[2]}`

if(true){

}

const square = x => x * x; 
const sum = (a, b) => a + b; 

//what want to destructure  = {the given object}
const {age, z, ...other} = {x : 2, y: 5, z:3 name: 'hikhih', age: 55}
//what want to destructure  = [the given array]
const [first, second, ...remaining] = ['ram', 'ram', 'ram', 'ram', 'ram']