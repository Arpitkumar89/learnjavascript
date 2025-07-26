let score = "550arpit"
let score1 = null
let score2 = undefined
let score3 = true
let score4 = false
let score5  = "Arpit"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);


console.log(typeof score2);
console.log(typeof(score2));

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);


console.log(typeof score3);
console.log(typeof(score3));

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);


console.log(typeof score4);
console.log(typeof(score4));

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);


console.log(typeof score5);
console.log(typeof(score4));

let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5);
console.log(valueInNumber5);

// coversion of "33" into number => 33 
// coversion of "33abc" into number => NaN 
// coversion of true into number => 1;
// coversion of false into number=> 0;
// coversion of null into number => 0
// coversion of undefined into number => NaN
// coversion of string into number => NaN

let isLoggedIn = 1 
let isLoggedIn1 = ""
let isLoggedIn2 = "Arpit"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);

// conversion of 1 into boolean  => true;
// conversion of 0 into boolean => false;
// conversion of "" into boolean => false 
// conversion of "Arpit" into boolean => true


let someNumber = 450

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let sum1 = "Hello"
let sum2 = " Arpit How are you?"
let sum3 = sum1 + sum2
console.log(sum3)