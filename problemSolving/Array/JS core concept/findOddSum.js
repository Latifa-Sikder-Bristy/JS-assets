// Find odd sum from array
function findOddSum(array) {
    let oddSum = 0;
    for (let number of array) {
        if (number % 2 !== 0) {
        oddSum += number;
        }
    }
    return oddSum;
}

// Find even sum from array
function findEvenSum(array) {
    let evenSum = 0;
    for (let number of array) {
        if (number % 2 == 0) {
            evenSum += number;
        }
    }
    return evenSum;
}
// Find even whole sum from array
function wholeSum(array) {
    let sum = 0;
    for (let number of array) {
        // if (number % 2 == 0) {
            sum += number;
        // }
    }
    return sum;
}


    const array = [5, 7, 8, 10, 45, 30];
    console.log(findOddSum(array));
    console.log(findEvenSum(array)); 
    console.log(wholeSum(array)); 
