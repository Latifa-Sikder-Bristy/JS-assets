const numbers = [12, 10, 15, 8, 7];

const doubled = numbers.map(num => num * 2)
// console.log(doubled)
const fiveBonus = numbers.map(num => num + 5)
console.log(fiveBonus)
//[ 17, 15, 20, 13, 12 ]
const half = numbers.map(num => num / 2)

const friends = ['Tom', 'John', 'Micheal', 'Oliver'];

const length = friends.map(frin => frin.length)
console.log(length)
//[ 3, 4, 7, 6 ]

const firstLeter = friends.map(frin => frin[0])
console.log(firstLeter);
// [ 'T', 'J', 'M', 'O' ]