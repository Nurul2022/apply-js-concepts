/// Factorial function (while loop )
function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
const myFactorialWhileLoop = getFactorial(6);
console.log(myFactorialWhileLoop); // rs 720

// Reverse function 
function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
const myFactorial = getFactorial(7);
console.log(myFactorial);  // rs 5040 




/*  //  Factorial function (for loop )
function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var firstFactorial = getFactorial(7);
console.log('factorial of 7 is ', firstFactorial); // rs factorial of 7 is  5040

var secondFactorial = getFactorial(9);
console.log('Factorial of 9 is ', secondFactorial); // rs Factorial of 9 is  362880  */