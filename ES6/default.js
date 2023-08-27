function add(num1 = 99, num2 = 89, num3 = 0){
    const result = num1 + num2; //5 + 7
    console.log(num1 + num2);
    console.log(num1, num2, result); //5, 7 , 12
    return result;
}
// const sum = add(5, 7);
const sum = add(5);

// 5 + undefined = NaN
// undefined + undefined = NaN

function add(first, last = ''){
    const full = first + '' + last; //5 + 7
    return full;
}

function friends(numbers = []){
    
}
function friends(numbers = {}){

}