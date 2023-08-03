var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var totalMarks = mathematics + biology + chemistry + physics + bangla;

var avg = totalMarks/5;
// console.log(avg);
// console.log(typeof avg);

avg = avg.toFixed(2)
// console.log(avg);
// console.log(typeof avg);

avg = parseFloat(avg);
console.log(avg);
// console.log(typeof avg);