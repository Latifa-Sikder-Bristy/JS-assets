/* //Homework: 
//Write a function that takes an array and returns lowest
function findLowestInArray(numbers){
    console.log('array inside the array: ', numbers);

    let lowest = numbers[0];

    for(let i = 0; i < numbers.lenghth; i++){
        //bujhar jonno index = i
        const index = i;
        //every element of index
        const element = numbers[index];
        if(element < lowest){
            lowest = element;
        }
        //don't return inside loop
    }
    return lowest;
}

const heights = [167, 190, 120, 165, 137];
const shortestPerson = findLowestInArray(heights);
console.log('Shortest person is: ', shortestPerson);

 */

function findShortestInArray(numbers) {
    console.log('array inside the array: ', numbers);

let shortest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < shortest) {
    shortest = element;
    }
}

return shortest;
}

const heights = [167, 190, 120, 165, 137];
const shortestPerson = findShortestInArray(heights);
console.log('shortest person is: ', shortestPerson);
