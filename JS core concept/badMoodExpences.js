var aug5thExpences = {
    uber: 230, 
    uber: 200,
}
var aug6thExpences = {
    ricshaw: 60, 
    food: 268,
    ricshaw: 90, 
    ricshaw: 40, 
    canvasFabric: 240,
    food: 30,
    ricshaw: 30,
    usbMuiltiplug: 400,
    ricshaw: 70,
    food: 186,
    suit: 300,
    food: 204
}
var getMoney = {
    cash: 800,
    nagad: 500
}

let sumAug5thExpences = 0;
for (const key in aug5thExpences) {
    sumAug5thExpences += aug5thExpences[key];
}

//--------------------------------------------------
let sumAug6thExpences = 0;    //init and set the sum
for (const key in aug6thExpences) {
    sumAug6thExpences += aug6thExpences[key];
}

let sumGetMoney = 0;    //init and set the sum
for (const key in getMoney) {
    sumGetMoney += getMoney[key];
}


let totalExpences = sumAug5thExpences + sumAug6thExpences;
let net = sumGetMoney - totalExpences;
console.log(net);
