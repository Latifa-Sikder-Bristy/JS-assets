/* // 3 to the power 8
const result = Math.pow(3, 8);
console.log(result); */

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
console.log(gap);


if(gap < 5){
    console.log('you guys can be friends');
}else{
    console.log('you guys can stay apart');
}

//----------------------------
//----------------------------
//convert full number
//- round
/* const number = 2.65354;
const fullNumber = Math.round(number);
console.log(fullNumber);
 */

/* //- ceil
const number = 2.65354;
const fullNumber = Math.ceil(number);
console.log(fullNumber); */

/* //- floor
const number = 2.65354;
const fullNumber = Math.floor(number);
console.log(fullNumber); */

//----------------------
// Random
//return a number from 0 to 1
// console.log(Math.random())

//return a number from 1 to 100
const random = Math.round(Math.random()*100)
console.log(random);

for(let i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6)
    console.log(random);
}