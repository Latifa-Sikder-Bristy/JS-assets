function factorial(number){
    let num = number;
    let result = 1;
    while(num >= 1){
        result = result * num;
        num--;
    }
    return result;
}

const output = factorial(7);
console.log(output);