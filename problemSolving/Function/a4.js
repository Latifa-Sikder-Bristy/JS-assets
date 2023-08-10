function cubeNumber(number){
    if (typeof number !== "number") {
        return "invalid input";
    }
    const result = Math.abs(Math.pow(number, 3));
    return result;
}
