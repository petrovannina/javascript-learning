'use strict';
// //////////////////////////////////////////////////////////////////////////
//                                   Algebra Very Easy
// //////////////////////////////////////////////////////////////////////////

// Create a function that takes two numbers as arguments and returns their sum.
// 1. check if the parameters is a number
function sumTwoNum(a, b) {
  return typeof a === 'number' && typeof b === 'number'
    ? console.log(a + b)
    : console.log(`The ${a} and ${b} is not a number`);
}

// this are the arguments
sumTwoNum(2, 5);
sumTwoNum(5, -9);
sumTwoNum('a', 'b');

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// (a) parameter
function addition(a) {
  return typeof a === 'number'
    ? console.log(++a)
    : console.log('This argument is not anumber');
}

// argument
addition(0); // 1
addition(9); // 10
addition(-3); // -2

// difrence between a++ and ++b;

let a = 5;
let b = 5;

console.log("a++ increments after the current value of 'a' is used:");
for (let i = 0; i < 5; i++) {
  console.log('a:', a++);
}

console.log("\n++b increments before the current value of 'b' is used:");
for (let i = 0; i < 5; i++) {
  console.log('b:', ++b);
}

// Create a function that takes the age in years and returns the age in days.
function calcAge(age) {
  return typeof age === 'number' ? 365 * age : `${age} is not a number`;
}

console.log(calcAge(65)); //➞ 23725
console.log(calcAge(0)); //➞ 0
console.log(calcAge(20)); //➞ 7300
console.log(calcAge('nina'));

console.log(isNaN(65));
console.log(isNaN(0));
console.log(isNaN('nina'));

console.log(!isNaN(65));
console.log(!isNaN(0));
console.log(!isNaN('nina'));

// Fix the code in the code tab to pass this challenge (only syntax errors).
//  Look at the examples below to get an idea of what the function should do.

function squared(b) {
  return b * b;
}

console.log(squared(5)); //➞ 25
console.log(squared(9)); //➞ 81
console.log(squared(100)); //➞ 10000

// Create a function that takes the number of wins,
// draws and losses and calculates the number of points a football team has obtained so far.
// wins get 3 points
// draws get 1 point
// losses get 0 points

function footballPoints(wins, draws, losses) {
  return !isNaN(wins, draws, losses)
    ? wins * 3 + draws
    : console.log(`${(wins, draws, losses)} are not numbers`);
}

console.log(footballPoints(3, 4, 2)); //➞ 13
console.log(footballPoints(5, 0, 2)); //➞ 15
console.log(footballPoints(0, 0, 1)); //➞ 0

// Create a function, that will for a given a, b, c, do the following:
// Add a to itself b times.
// Check if the result is divisible by c.

// parameters
function abcMath(a, b, c) {
  let result = a;
  for (let i = 0; i < b; i++) {
    result = a + a;
  }

  // return result % c ? 'true' : 'false';
  return result % c === 0;
}


// arguments
console.log(abcMath(42, 5, 10)); //➞ false
console.log(abcMath(5, 2, 1)); //➞ true
console.log(abcMath(1, 2, 3)); //➞ false

// 42+42 = 84,84+84 = 168,168+168 = 336,336+336 = 672, 672+672 = 1344
// 1344 is not divisible by 10


// You are given 2 out of 3 angles in a triangle, in degrees.
// Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
// An acute angle is less than 90 degrees.
// A right angle is exactly 90 degrees.
// An obtuse angle is greater than 90 degrees (but less than 180 degrees).
// For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

function missingAngle(angle1, angle2) {
  let sum = angle1 + angle2;
  let misAng = 180 - sum;
  if (misAng === 90) return 'right';
  if (misAng <= 90) return 'acute';
  if (90 <= misAng <= 180) return 'obtuse';
}

console.log(missingAngle(27, 59)); //➞ "obtuse"
console.log(missingAngle(135, 11)); //➞ "acute"
console.log(missingAngle(45, 45)); //➞ "right"


// Create a function that takes a number as an argument and returns the square root of that number cubed.
function cubeSquareRoot(param) {
  return Math.sqrt(param **3)
}

// arguments
console.log(cubeSquareRoot(81)); //➞ 729
console.log(cubeSquareRoot(1646089));//➞ 2111932187
console.log(cubeSquareRoot(695556));//➞ 580093704


// Imagine a circle and two squares: a smaller and a bigger one. For the smaller one, the circle is a circumcircle and for the bigger one, an incircle.
// Scale
// Create a function, that takes an integer (radius of the circle) and returns the difference of the areas of the two squares.
function squareAreasDifference(radius) {
  return Math.pow(2 * radius, 2) - Math.pow(Math.sqrt(2) * 2 * radius, 2);
}

console.log(squareAreasDifference(5));//➞ 50
console.log(squareAreasDifference(6));//➞ 72
console.log(squareAreasDifference(7));//➞ 98

// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
function calculator(expression) {
  // o sa evalueze expresia si o sa facadupa operatiile
  // NU FOLOSI EVAL
  // Transforma string in numar (expresie numerica care face operatia)
  return eval(expression);
  // cred ca putem face si asa da se pare ca expresion nu se poate schimba direct cu -
  // Comment: When you pass a string to this function, say "12+3+4", the unary minus operator tries to convert the string to a number. Since the string "12+3+4" cannot be directly converted to a number, it results in NaN.
  // return -expression + 0;
}

console.log(calculator('23+4')); //➞ 27
console.log(calculator('45-15'));//➞ 30
console.log(calculator("13+2-5*2")); //➞ 5
console.log(calculator('49/7*2-3'));//➞ 11


// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
function divisible(par) {
  return par % 100 === 0
}


console.log(divisible(1));// ➞ false
console.log(divisible(1000));//➞ true
console.log(divisible(100));//➞ true

// Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.
function area(par1, par2) {
  return (par1 > 0 && par2 > 0) ? par1 * par2 : -1;
}

console.log(area(3, 4));//➞ 12
console.log(area(10, 11));//➞ 110
console.log(area(-1, 5));//➞ -1
console.log(area(0, 2));//➞ -1

// Create a function that returns how many possible arrangements can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different patterns of on and off can we have?
function posCom(param) {
  // return Math.pow(2, param)
  return 2 ** param;
}

console.log(posCom(1));// ➞ 2
console.log(posCom(3));// ➞ 8
console.log(posCom(10));// ➞ 1024

// Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.
function imposterFormula(imposterCount, playerCount) {
  const chance = Math.round(100 * (imposterCount / playerCount));
  return chance + '%'
}

console.log(imposterFormula(1, 10)); // ➞ "10%"
console.log(imposterFormula(2, 5));  //➞ "40%"
console.log(imposterFormula(1, 8)); // ➞ "13%"

// A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.
// Write a function that determines if the year is a leap year or not.
function leapYear(year) {
  // solutia mea care nu functioneaza
  // if (year % 4 === 0) {
  //   if (year % 100 === 0) return year % 400 === 0
  //   else true;
  // } else false;

  // solutie chatGBT
  // if (year % 4 === 0) {
  //   if (year % 100 === 0) {
  //     return year % 400 === 0;
  //   } else {
  //     return true;
  //   }
  // } else {
  //   return false;
  // }

  return year % 4 === 0 
}


console.log(leapYear(2020)); // ➞ true
console.log(leapYear(2021)); //➞ false
console.log(leapYear(1968)); // ➞ true

// Write a function that returns true if a year is a leap, otherwise return false.
// A year is a "leap year" if it lasts 366 days, instead of 365 in a typical year. That extra day is added to the end of the shortest month, creating February 29.
// A leap year occurs every four years, and will take place if the year is a multiple of four. The exception to this is a year at the beginning of a century (for example, 1900 or 2000), where the year must be divisible by 400 to be a leap year.
// Look at the examples, and if you need help, look at the resources panel.

function leapYear(year) {
  // solutia chatGBT
  // if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }

  return year % 4 === 0 && year % 10 !== 0;
}

console.log(leapYear(1990));//  ➞ false
console.log(leapYear(1924));//  ➞ true
console.log(leapYear(2000)); // ➞ false
console.log(leapYear(2021));//  ➞ false


// Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...
// Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.
function stackBoxes(row) {
  return row ** 2;
}


console.log(stackBoxes(1));// ➞ 1
console.log(stackBoxes(2));// ➞ 4
console.log(stackBoxes(3));// ➞ 9
console.log(stackBoxes(4));// ➞ 16
console.log(stackBoxes(5));// ➞ 25
console.log(stackBoxes(0));// ➞ 0

// Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube.
// The Rubik's cube of side length 1 has 6 stickers.
// The Rubik's cube of side length 2 has 24 stickers.
// The Rubik's cube of side length 3 has 54 stickers.
function howManyStickers(rows) {
  return( rows * rows) * 6
}

console.log(howManyStickers(1)); //  ➞ 6
console.log(howManyStickers(2)); // ➞ 24
console.log(howManyStickers(3)); //  ➞ 54

// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

function fiftyThirtyTwenty(budget) {
  // am adaugat si taxele daca consideram ca venitul este brut
  const budgetAfterTax = budget * 0.4;
  const needs = budgetAfterTax / 2;
  const wants = budgetAfterTax * 0.3;
  const savings = budgetAfterTax * 0.2;
  return {
    'needs': needs,
    'Wants': wants,
    'savings': savings
  }
}

console.log(fiftyThirtyTwenty(10000)); //  ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
console.log(fiftyThirtyTwenty(50000)); //  ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
console.log(fiftyThirtyTwenty(13450)); //  ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }


// Create a function that takes a positive integer n and returns the nth "star number".
// A star number is a centered figurate number that represents a centered hexagram (six-pointed star), such as the one that Chinese checkers is played on.
function starNumber(n) {
  return (6*n*(n - 1) + 1);
}

console.log(starNumber(2)); // ➞ 13
// n = 2
// 2nd star number = 13

console.log(starNumber(3));//  ➞ 37
// n = 3
// 3rd star number = 37

console.log(starNumber(5));//  ➞ 121
// n = 5
// 5th star number = 121

// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// The function will be in this form:
// equalSlices(total slices, no. recipients, slices each)
function equalSlices(totalSlices, people, slicePerPers) {
  return people * slicePerPers <= totalSlices;
  // 5*2 = 10 < 11
}


console.log(equalSlices(11, 5, 2));//  ➞ true
// 5 people x 2 slices each = 10 slices < 11 slices
console.log(equalSlices(11, 5, 3));//  ➞ false
// 5 people x 3 slices each = 15 slices > 11 slices
console.log(equalSlices(8, 3, 2));//  ➞ true
console.log(equalSlices(8, 3, 3));// ➞ false
console.log(equalSlices(24, 12, 2));// ➞ true


// Create a function that inverts the rgb values of a given tuple.
function colorInvert(color) {
  return color.map(i => 255 - i);
}

console.log(colorInvert([255, 255, 255]));// ➞ [0, 0, 0]
// (255, 255, 255) is the color white.
// The opposite is (0, 0, 0), which is black.
console.log(colorInvert([0, 0, 0]));// ➞ [255, 255, 255]
console.log(colorInvert([165, 170, 221]));// ➞ [90, 85, 34]


// You are given two numbers a and b. Create a function that returns the next number greater than a and b and divisible by b.
function divisibleByB(n1, n2) {
  while (n1 % n2 !== 0) {
    n1++;
  }
  return n1;
  //  17 > 8 -> 8 +1 :  17 + 1 
  // 5 > 3 -> 5 + 1 : 3+ 1
  // 18 % 8 === 0 ? 18 : 18 +1
}

console.log(divisibleByB(17, 8)); //  ➞ 24
console.log(divisibleByB(98, 3)); // ➞ 99
console.log(divisibleByB(14, 11) );// ➞ 22


// Given a number n, find if its 2nd, 4th and 8th roots are all integers (perfect roots), return true if it exists, false if not.
function perfectRoots(num) {
  // let root = Math.sqrt(num);
  // let root2;
  // let root3;
  
  // if (Number.isInteger(root)) {
  //   root2 = Math.sqrt(root);
  // } else {
  //   return false
  // }

  // if (Number.isInteger(root2)) {
  //   root3 = Math.sqrt(root2);
  //   return true
  // } else {
  //   return false
  // }
  // codus de sus intr-o singura linie de cod
  const isPerfectCube = num => Math.cbrt(Math.sqrt(num)) % 1 === 0;

  // console.warn('nina');
  // let root = Math.sqrt(num);
  // console.log(Math.sqrt(num));
  // console.log(Math.sqrt(num) % 1);
  // solutie net 
  return num > 0 && Math.sqrt(num) % 1 === 0;
}


console.log(perfectRoots(256));// ➞ true
// 2nd root of 256 is 16
// 4th root of 256 is 4
// 8th root of 256 is 2
console.log(perfectRoots(1000));// ➞ false
console.log(perfectRoots(6561));//  ➞ true


// Create a function that takes two numbers and a mathematical operator and returns the result.
// Transforma string in numar (expresie numerica care face operatia)
// NU FOLOSI EXAVL!!!!!
function calculate(n1, n2, oper) {
  return eval(n1 + oper + n2);
}


console.log(calculate(4, 9, "+"));// ➞ 13
console.log(calculate(12, 5, "-"));// ➞ 7
console.log(calculate(6, 3, "*"));// ➞ 18
console.log(calculate(25, 5, "/"));// ➞ 5
console.log(calculate(2, 3, "%"));//  ➞ 2
console.warn('nina');

// The problem is not adding. The problem is that the numbers are not in order. Create a function that organizes the numbers and adds the numbers in the range between X and Y.
function justAnotherSumProblem(par1, par2) {
  // fa un for care o sa returneze toate cifrele intre cei doi parametri
  // let sum = 0;
  // for (let i = par1; i < par2; i++) {
  //   console.log(i);
  //   sum += i;

  // }
  // return sum;
  // la fiecare iterare aduna la par1 urmatoarea cifra

  // Find the smaller and larger numbers
  let start, end;
  if (par1 < par2) {
    start = par1;
    end = par2;
  } else {
    start = par2;
    end = par1;
  }

  // Initialize sum
  let sum = 0;

  // Loop through the range and add numbers to sum
  for (let i = start; i <= end; i++) {
    console.log(i);
    sum += i;
  }

  // Return the sum
  return sum;
}

console.log(justAnotherSumProblem(-10, 1));// ➞ -54
// console.log(justAnotherSumProblem(-20, 5));// ➞ -195
// console.log(justAnotherSumProblem(90, 45));// ➞ 3105

// For this challenge, you are supposed to find the sum of the digits of a two-digit number. Sounds easy, right? But for this challenge, I expect you to find the sum of the digits mathematically.
// Sure, you can convert the number into a string and then manipulate it so it returns the sum of the digits, but the point of this challenge is to see if you know how to return the sum of the digits of a two-digit number mathematically.
function twoDigitSum(num) {
  return num%10 + num/10;
}

console.log(twoDigitSum(45));// ➞ 9
console.log(twoDigitSum(38));// ➞ 11
console.log(twoDigitSum(67));// ➞ 13





















































