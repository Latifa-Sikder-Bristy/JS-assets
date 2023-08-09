/* 
fixed: per item wood requirements
1. chair --> 3 cft
2. table --> 10 cft
2. bed --> 50 cft

vary: quantity
*/

function woodCalc(chairQty, tableQty, bedQty){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQty *perChairWood;
    const tableWood = tableQty *perTableWood;
    const bedWood = bedQty *perBedWood;
    // console.log(chairQty, tableQty, bedQty)

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalc(2, 2, 5);
console.log('Total wood required', totalWood);