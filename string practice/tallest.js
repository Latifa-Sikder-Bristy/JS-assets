function maxInArray(numbers){
    console.log('array inside the array: ', numbers);

    let largest = numbers[0];

    for(let i = 0; i < numbers.lenghth; i++){
        //bujhar jonno index = i
        const index = i;
        //every element of index
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
        //don't return inside loop
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log('tallest person is: ', tallest);

//Homework: 
//Write a function that takes an array and returns lowest