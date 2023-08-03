/* function functionName(parameter){
    //function body
    //return
}
var returnValue = functionName(param value) */

function getAvg(assinment1, assinment2, assinment3,){
    const total = assinment1 + assinment2 + assinment3;
    const avarage = total/3;
    return avarage;
}

const assinment1Marks = 60;
const assinment2Marks = 58;
const assinment3Marks = 20;

var myAverage = getAvg(assinment1Marks, assinment2Marks, assinment3Marks)
console.log('My avg so far', myAverage)