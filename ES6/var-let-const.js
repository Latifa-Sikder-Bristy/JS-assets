//var : no reason to use var usally
// let : allow it to reasign
// const : do not allow it to ressign

const money = 25;
//money = 50;
const rich = money + 25;
console.log(rich);

let count = 0;
count = count + 10;
console.log(count);

const numbers = [23, 4, 23, 12, 56];
// numbers = [23, 12, 56];  // not allow
numbers[1] = 55;
numbers.push(8, 9, 65);
console.log(numbers);

//object
const student = {
    name: 'John',
    class: 12
}
console.log(student);

//loop
let sum = 0;
for(let i = 0; i < 10; i++){
    const numbers = i;
    sum = sum + i;
}
console.log(sum);
