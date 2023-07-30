var money = 50;
var danishPrice = 40;
var butterBread = 35;
var toastBiscuit = 20;
var tea = 10;

if(danishPrice < money){
    console.log('dan dan danish');
}else if (butterBread < money){
    console.log("I'll buy a Bread");
}else if (toastBiscuit < money){
    console.log("I'll buy a Biscuit");
}else{
    console.log(`I love Tea`);
}

//-------------------------------------//
var math = true;
var geomatry = true;
var accounting = false;
console.log(accounting);

if(math = true){
    if(geomatry == true){
        if(accounting == true){

        }
        else{
            console.log('accounting')
        }
    }else{
        console.log('geomatry work')
    }
}