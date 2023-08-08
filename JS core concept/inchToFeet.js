/* const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);

const dadaInches = 122;
const dadaFeet = myInches / 12;
console.log(dadaInches);
 */

function inchToFeet(inchValue){
    const inchCalc = inchValue / 12;
    return inchCalc;
}
const dadaInches = 240;
const dadaFeet = inchToFeet(dadaInches)
console.log(dadaFeet);
