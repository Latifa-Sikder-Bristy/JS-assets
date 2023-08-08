function findLeapYear(years) {
    const leapYears = [];
        
    for (const year of years) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        leapYears.push(year);
        }
    }
    return leapYears;
}

const years = [2023, 2024, 2025, 2028, 2030];
const leapYears = findLeapYear(years);
console.log(leapYears);
