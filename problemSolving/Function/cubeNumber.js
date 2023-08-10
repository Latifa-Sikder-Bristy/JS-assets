function cubeNumber(number){
    if (typeof number !== "number") {
        return "invalid input";
    }
    // else if (number <= 0) {
    //     return "invalid input";
    // }
    const result = Math.abs(Math.pow(number, 3));
    return result;
}
console.log(cubeNumber(-3));