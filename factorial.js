/*
3! = 3 X 2 X 1
4! = 4 X 3 X 2 X 1
5! = 5 X 4 X 3 X 2 X 1
6! = 6 X 5 X 4 X 3 X 2 X 1
7! = 7 X 6 X 5 X 4 X 3 X 2 X 1
*/

// Factorial
function getFactorial(num){
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
        
    }
    return factorial
    
}
const getMyFactorial = getFactorial(9)
console.log(getMyFactorial); 

/* 
// Factorial check  // you can factorial up to any num
let factorial =  1;
for( let i = 1; i <= 7; i++){    // you can change 7 num
    factorial = factorial * i;

}
console.log(factorial); // rs 5040 


// Up to 20 all number addition // you can addition up to any num
let upToTwenty =  0;
for( let i = 1; i <= 20; i++){  // you can change 20 num
    // let upToTwenty =  1;
    upToTwenty = upToTwenty + i;

}
console.log(upToTwenty); // rs 210 
*/