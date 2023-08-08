function isLeapYear(year){
    // var isLeapYear = year % 4 ===0;
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else(remainder === 0)
    return false;
    
}

const myyear = isLeapYear(2025);
console.log(myyear)