// Leap Year check
function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const myYear = 2023;
const isMyYearLeapYear = isLeapYear(myYear)
console.log('Is my year Leap year', isMyYearLeapYear);
//rs Is my year Leap year false
