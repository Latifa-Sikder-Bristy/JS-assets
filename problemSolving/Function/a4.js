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