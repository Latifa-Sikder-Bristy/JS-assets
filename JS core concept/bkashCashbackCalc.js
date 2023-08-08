function fullCashback(){
    console.log('Full cashback ', bkashFineAmount)
}
function remainingCashback(transport, food, coffee, shooping){
    const totalCostForMoodOn = transport + food + coffee + shooping;
    const remainingAmount = bkashFineAmount - totalCostForMoodOn;
    if(remainingAmount > 10){
        console.log('Cashback', remainingAmount);
        return remainingAmount;
    }else{
        console.log('Cashback not allowed')
    }
}

//------- The two line may vary -----
const bkashFineAmount = 5000;
var moodHappy = false;
//-----------------------------------


if(moodHappy == true){
    return fullCashback();
}else{
    var getCashbackOrNot = remainingCashback(570, 1230, 400, 5500);
    return getCashbackOrNot;
}