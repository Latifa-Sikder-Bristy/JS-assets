/* function sortMaker(arr) {
    if(arr.length > 1){
        console.log('Invalid Input')
    }
}
console.log(sortMakerar(arr[43, 323, 43, 54])); */

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

    const arr = [4, 5];
    console.log(sortMaker(arr));
