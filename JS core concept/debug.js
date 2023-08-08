function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= 7; i++){
        factorial = factorial * i;
        console.log(i, factorial);
    }
    return factorial;
}
const factorial = getFactorial(8);
console.log('factorial of 8 is:', factorial);

/*     
    JS debug strategy
    
    - check initial var value
    - check loop condition value
    - check calculation
    - check var with **console.log** in every steps */