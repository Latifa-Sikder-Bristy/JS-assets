//The factorial of a number is the product of all the positive integers less than or equal to that number.

function factorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

const number = 5;
console.log(factorial(number)); // 120
