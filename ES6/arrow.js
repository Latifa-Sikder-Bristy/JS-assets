// Option 1: function declaration
/* function add (a, b){
    const result = a + b;
    return result;
} */

// Option 2
function add (a, b){
    return a + b;
}

//function expression
const add2 = function(a, b){
    return a+b; //this is the same as above.
}

//arrow function
const add3 = (a, b) => a + b;
const add4 = (n1, n2, n3, n4, n5) => n1 + n2 + n3 + n4 + n5;
const mul = (a, b) => a * b;

/* const sum = add4(5, 90, 5, 7, 0);
console.log(sum); */
const mult = mul(5, 90);
console.log(mult);