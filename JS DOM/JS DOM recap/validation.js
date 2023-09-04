const number = 23;
//string, number, boolean
if(typeof number === 'number'){
    console.log('Value is a Number'); // Number
}else{
    console.log('Value is not a Number'); // Number
}

const numbers = [3, 12, 78, 90];
const student = {name: 'rongila', job: 'khaoadaoa kora'};
// console.log(Array.isArray (numbers));
console.log(Array.isArray (student));
console.log(isNaN(37)); //is not a number?
console.log(isNaN('2'));
console.log(isNaN('ab'));
console.log(typeof student);
console.log(isNaN({}));
