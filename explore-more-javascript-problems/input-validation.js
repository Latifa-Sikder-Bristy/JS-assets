function add(num1, num2){
//  1.  check input validation
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return (num1 + num2);
}

const result = add(12, 13);
console.log(result);

function muiltiply(num1, num2){
    return num1 * num2;
}
//  2.   use breakpoint 
const output = muiltiply(12, 13);
console.log(output);