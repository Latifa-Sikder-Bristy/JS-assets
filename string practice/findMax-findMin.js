// Write a finction will take 3 nums, return the max
//first time do it using if-else
/* function findMax(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num1 && num2 > num3){
        return num2;
    }else{
        return num3;
    }
} */

// Write a finction will take 3 param, return the min num
//first time do it using if-else
/* function findMin(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        return num1;
    }else if(num2 < num1 && num2 < num3){
        return num2;
    }else{
        return num3;
    }
} */

// Write a finction will take 3 nums, return the max
//first time do it using Math.min or Math.max
function findMax(num1, num2, num3){
    var check = Math.max(num1, num2, num3);
    return check;
}

// Write a finction will take 3 param, return the min num
//first time do it using Math.min or Math.max
function findMin(num1, num2, num3){
    var check = Math.min(num1, num2, num3);
    return check;
}


const result1 = findMax(5, 7, 3)
const result2 = findMin(5, 7, 3)
console.log(result1);
console.log(result2);
