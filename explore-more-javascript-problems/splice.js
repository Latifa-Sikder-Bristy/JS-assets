//Array slice
const friends = [12, 45, 32, 22, 45, 62, 69]
console.log(friends);

//Removes elements from an array 
//and, if necessary, inserts new elements in their place, 
//returning the deleted elements.
//will change the original array
const partial = friends.splice(2, 3, 99, 555, 777);
                            //init, last, replaceNum,replaceNum,replaceNum,

//slice doesn't change the original array
console.log(partial);
console.log(friends);
