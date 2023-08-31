//filter selects elements based on a conndition and returns an array with the elements that fulfilled the condition
const numbers = [1, 4, 5, 6, 7, 15];

const players = [76, 65, 45, 87, 34, 59]

// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
const selected = players.filter(p => p % 2 === 1);

console.log(selected)

const friends = ['Tom', 'John', 'Micheal', 'Oliver', 'Tim', 'Joshna']
const oddFriend = friends.filter(friend => friend.length > 4)
console.log('oddFriends: ', oddFriend)