function getFactorial(){
    for(let i = 0; i <=7; i++){
        factorial = factorial + i;
    }
    return factorial;
}

const factorial = getFactorial(8);
console.log('factorial of 8 is:', factorial);