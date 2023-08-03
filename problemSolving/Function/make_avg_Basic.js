function make_avg(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    const average = sum / 3;
    return average;
}  

const number = make_avg(1, 2, 3)
console.log(number)