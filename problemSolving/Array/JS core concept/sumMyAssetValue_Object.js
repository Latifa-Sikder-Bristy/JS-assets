//my home jinispotro er dam
const obj = { 
    bed: 3500,  
    fan: 3000,  
    pilow: 1700,  
    almirah: 7500,  
    chair: 12000,  
    table: 1500,  
    laptop: 125000,  
    monitor: 29500,  
    keyboard: 2750,  
    cable: 500,  
    toolsHardware: 300,  
    weightMachine: 1500,  
    kitchenTable: 500,  
    bedsideTable: 500,    
    trackLing: 2000,  
    fridge: 44000,  
    router: 2000,  
    crokaries: 3500,  
    mirror: 1500,  
    mirrorLight: 1000,  
    bookSelf: 3000,  
    curtairn: 1000,  
    passport: 6000,  
    graphicsTab: 3000,  
    gymOutfits: 2200,  
    gym: 1400,  
    passportDisk: 6000
};
const overheadCost = { 
//    overhead cost 
    asuliaToDhanmondi: 3000,  
    april: 12000,  
    may: 12000,  
    shifting: 1700, 
    washroomCleaning: 850,  
    june: 12000,  
    july: 12000,  
    aug: 10000,
    shifting: 2400,
    bau: 200,
    packaging: 500,
    washroomCleaning: 700,  
    sep: 10000,
    oct: 10000,
};


let sum = 0;    //init and set the sum
for (const key in obj) {
    sum += obj[key];
}
console.log(sum); // 6

// ------------------------
let sumOverhead = 0;    //init and set the sum
for (const key in overheadCost) {
    sumOverhead += overheadCost[key];
}
console.log(sumOverhead);
