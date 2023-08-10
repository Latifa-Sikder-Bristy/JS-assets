function cubeNumber(number){
    if (typeof number !== "number") {
        return "invalid input";
    }
    const result = Math.abs(Math.pow(number, 3));
    return result;
}

function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return 'Please enter string';
    }
    const indexOf = string1.indexOf(string2);
    return indexOf !== -1;
}

function sortMaker(arr) {
    if (arr.length !== 2 || arr[0] < 0 || arr[1] < 0) {
        return "Invalid Input";
    }else if(arr[0] == arr[1]){
        return "equal";
    }
    else {
        arr.sort();
        [arr[0], arr[1]] = [arr[1], arr[0]]
        return arr;
    }
}





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