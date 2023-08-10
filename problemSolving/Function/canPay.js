function canPay(changeArray, totalDue) {
    const element = changeArray[0];
    if(changeArray.length === 0 || element === null || element === undefined || element === ''){
        return "Validation not passed";
    }
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];
    }
    if(sum >= totalDue){
        return true;
    }else
        return false;
}

const numbers = [1, 5, 5];
const result = canPay(numbers, 10);
console.log(result); 