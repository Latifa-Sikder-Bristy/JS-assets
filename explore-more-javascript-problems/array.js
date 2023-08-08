const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 432, class:11, name: 'Agun'};
const friends = [13, 12, 15, 16, 17, 21, 18]

function add(num1, num2){
    return (num1 + num2);
}

console.log(typeof country);  //string
console.log(typeof age);    //num
console.log(typeof isIndependent);  //boolean
console.log(typeof student);    //object
console.log(typeof friends);    // array detected as a object
console.log(typeof add);    //function

//to check typeOf object
//check array
console.log(Array.isArray(friends));

//----------------------------
//check isInArray
//system 1
console.log(friends.includes(19));
console.log(friends.includes(21));

//check isInArray
//system 1
// output false hole -1
if(friends.indexOf(19) !== -1){

}

//concat: 
const newFriendsAge = [12, 13, 11, 13]
const allNewFriends = newFriendsAge.concat(friends);
console.log(allNewFriends)

//-------------Summary------------------
/* 
1. Array.isArray()
2. array.includes()
3. array.indexOf() == -1
4. newArray.concat(oldArray)
 */