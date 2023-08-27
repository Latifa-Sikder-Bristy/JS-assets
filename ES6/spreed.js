const max = Math.max(6, 5, 3, 9, 45)
// console.log(max)

const num = [6, 5, 3, 9, 4, 55, 3, 9]
const arrayMax = Math.max(num)
// console.log(...num)
// console.log(arrayMax)

//use spreasd operator to copy
const friends = [6, 5, 3, 9, 4, 55, 3, 9];
const bondhu = friends;
const dost = [...friends]  //copy
console.log(dost)
friends.push(500)
console.log(friends)

//advance
const sonkha = [...friends, 9999] //copy and extra element of copy
console.log(sonkha)