let first = 5;
let second = 7;

//approch: 1
//swap
/* const temp = first;
first = second;
second = temp; */

//approch: 2 ---------- destructing
[first, second] = [second, first]

console.log(first, second);
