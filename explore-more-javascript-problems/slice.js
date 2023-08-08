//Array slice
const friends = [12, 45, 32, 22, 45, 62, 69]
const partial = friends.slice(2, 5);
console.log(partial);
//slice doesn't change the original array
console.log(friends);