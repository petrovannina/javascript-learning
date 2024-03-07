'use strict';
console.log('arrays-very-easy');
// //////////////////////////////////////////////////////////////////////////
//                                   Arrays Very Easy
// //////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(array) {
  let biggest = array[0];
  let smallest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > biggest) biggest = array[i];
    if (array[i] < smallest) smallest = array[i];
  }

  return [smallest, biggest];
}

console.log(minMax([1, 2, 3, 4, 5])); // ➞ [1, 5]
console.log(minMax([2334454, 5])); //  ➞ [5, 2334454]
console.log(minMax([1])); // ➞ [1, 1]

// Create a function that returns true if the first array can be nested inside the second and false otherwise.
// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
function canNest(array1, array2) {
  // console.log(array1);
  // console.log(array2);

  const [minA1, maxA1] = minMax(array1);
  const [minA2, maxA2] = minMax(array2);
  // console.log('Min max array1', minMax(array1));
  // console.log('Min max array2', minMax(array2));
  return minA1 > minA2 && maxA1 < maxA2 ? true : false;
}

console.log(canNest([1, 2, 3, 4], [0, 6])); // ➞ true
console.log(canNest([3, 1], [4, 0])); // ➞ true
console.log(canNest([9, 9, 8], [8, 9])); // ➞ false
console.log(canNest([1, 2, 3, 4], [2, 3])); // ➞ false

// When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:
// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

function seriesResistance(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(seriesResistance([1, 5, 6, 3])); // ➞ "15 ohms"
console.log(seriesResistance([16, 3.5, 6])); // ➞ "25.5 ohms"
console.log(seriesResistance([0.5, 0.5])); // ➞ "1.0 ohm"

// Create a function that takes two arrays and insert the second array in the middle of the first array.

function tuckIn(array1, array2) {
  // Metoda mea
  // const [array1, array2] = arrays;
  // console.log(array1, array2);
  // where to cut
  const hafLenght = array1.length / 2;
  array1.splice(hafLenght, 0, ...array2);
  return array1;

  // // variata 2
  // const halfLength = Math.floor(array1.length / 2);
  // console.log(halfLength);
  // array1.splice(halfLength, 0, ...array2); // Insert elements of array2 into array1
  // return array1;
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])); // ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(tuckIn([15, 150], [45, 75, 35])); //  ➞ [15, 45, 75, 35, 150]
console.log(
  tuckIn(
    [
      [1, 2],
      [5, 6],
    ],
    [[3, 4]]
  )
); //  ➞ [[1, 2], [3, 4], [5, 6]]

// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
function numberSplit(num) {
  // Solutia mea
  // return [(num - Math.ceil(num / 2)), Math.ceil(num / 2)];

  // Solutie cu array
  let half1 = Math.floor(num / 2);
  let half2 = Math.ceil(num / 2);

  return [half1, half2];
}

console.log(numberSplit(4)); // ➞ [2, 2]
console.log(numberSplit(10)); //  ➞ [5, 5]
console.log(numberSplit(11)); //  ➞ [5, 6]
console.log(numberSplit(-9)); //  ➞ [-5, -4]

// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

function filterArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') newArray.push(i);
  }
  return newArray;
}

console.log(filterArray([1, 2, 'a', 'b'])); //  ➞ [1, 2]
console.log(filterArray([1, 'a', 'b', 0, 15])); // ➞ [1, 0, 15]
console.log(filterArray([1, 2, 'aasf', '1', '123', 123])); // ➞ [1, 2, 123]

// Create a function that returns an array of strings sorted by length in ascending order.
// function sortByLength(array) {
//   console.log(array);
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i].length);

//     // Sort the numbers in ascending order:
//     newArray = array[i].length.sort(function (a, b) {
//       return a - b;
//     });

//     // points.sort(function (a, b) {
//     //   return a - b;
//     // });
//   }

//   return newArray;
// }

function sortByLength(array) {
  // Sort the array of strings by length in ascending order
  array.sort(function (a, b) {
    return a.length - b.length;
  });

  return array;
}

console.log(sortByLength(['a', 'ccc', 'dddd', 'bb'])); // ➞ ["a", "bb", "ccc", "dddd"]
console.log(sortByLength(['apple', 'pie', 'shortcake'])); // ➞ ["pie", "apple", "shortcake"]
console.log(sortByLength(['may', 'april', 'september', 'august'])); // ➞ ["may", "april", "august", "september"]
console.log(sortByLength([])); // ➞ []

// Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i] ** 3;
  }

  return sum;
}

console.log(sumOfCubes([1, 5, 9])); //  ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
console.log(sumOfCubes([3, 4, 5])); //  ➞ 216
console.log(sumOfCubes([2])); // ➞ 8
console.log(sumOfCubes([])); //  ➞ 0

// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

function getOnlyEvens(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i] % 2 === 0);
    array[i] % 2 === 0 && i % 2 === 0 ? newArray.push(array[i]) : 'nimic';
  }

  return newArray;
}

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])); //  ➞ [2, 4]
console.log(getOnlyEvens([0, 1, 2, 3, 4])); //  ➞ [0, 2, 4]
console.log(getOnlyEvens([1, 2, 3, 4, 5])); //  ➞ []

// Create a function that takes an array of strings and return an array, sorted from shortest to longest.
function sortByLenght(array) {
return array.sort((a, b) => a.lenght - b. lenght);
}

// this was created before ----- line 142
console.log(sortByLength(["Google", "Apple", "Microsoft"])); // ➞ ["Apple", "Google", "Microsoft"]
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])); // ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
console.log(sortByLength(["Turing", "Einstein", "Jung"])); //➞ ["Jung", "Turing", "Einstein"]


// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
function isAvgWhole(array) {
  // Find the sum of all elements
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  // const sum = array.reduce((acc, cur) => acc + curr, 0);
  
  // Divide the sum by totoal numbers of elements in the array to calculate the average
  let avarege = sum / array.length;
  
  // chack if the average is a whole 
  return Number.isInteger(avarege);
}


console.log(isAvgWhole([1, 3]));//  ➞ true
console.log(isAvgWhole([1, 2, 3, 4]));//  ➞ false
console.log(isAvgWhole([1, 5, 6]));//  ➞ true
console.log(isAvgWhole([1, 1, 1]));//  ➞ true
console.log(isAvgWhole([9, 2, 2, 5]));//  ➞ false

////////////////////////////////////////////////   REDUCE METHOD USED
// Write a function that takes an array of numbers as input and returns the sum of all elements using the reduce() method.
function sumR(array) {
  return array.reduce((accumulator, current) => accumulator += current, 0)
}

console.log(sumR([1, 3]));//  ➞ 4
console.log(sumR([1, 2, 3, 4]));//  ➞ 10
console.log(sumR([1, 5, 6]));//  ➞ 12
console.log(sumR([1, 1, 1]));//  ➞ 3
console.log(sumR([9, 2, 2, 5]));//  ➞ 18

// Write a function that takes an array of arrays as input and returns a single flat array containing all the elements using the reduce() method.

function flattenArray(array) {
  return array.reduce((acc, curr) => acc.concat(curr), []);
}
console.log(flattenArray([[1, 2], [3, 4], [5, 6]])); // Expected Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([[1, 2], [3, 4, 5], [6]]));// Expected Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([[1, 2], [], [3, 4], [], [5, 6]])); // Expected Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([[1, 'a'], [true, false], [null, undefined]])); // Expected Output: [1, 'a', true, false, null, undefined]
console.log(flattenArray([[1, [2, 3]], [4, [5, [6, 7]]]])); // Expected Output: [1, 2, 3, 4, 5, 6, 7]

// Write a function that takes an array of values as input and returns an object with the count of each unique value using the reduce() method.
function countInstances(array) {
  return array.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}

console.log(countInstances(['a', 'b', 'c', 'a', 'b', 'a'])); 
// Write a function that takes an array of numbers as input and returns the maximum value using the reduce() method.

function findMax(array) {
  return array.reduce((max, curr) => (curr > max ? curr : max), Number.NEGATIVE_INFINITY);
}

console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
// ///////////////////////////////////////////////////////   END

// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
function getAbsSum(array) {
  return Math.abs(array.reduce((acc, curr) => acc += curr, 0));
}


console.log(getAbsSum([2, -1, 4, 8, 10])); // Output: 25
console.log(getAbsSum([-3, -4, -10, -2, -3])); // Output: 22
console.log(getAbsSum([2, 4, 6, 8, 10])); // Output: 30
console.log(getAbsSum([-1])); // Output: 1



// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.
function sortNumsAscending(arr) {
  // becouse ternary operator dose not return anuthing asigning arr to ternary operator//// Check if arr is null or empty
  arr = (arr === null || arr.length === 0) ? [] : arr;

  return arr.sort((a, b) => { a - b });
}


console.log(sortNumsAscending([1, 2, 10, 50, 5])); // Expected Output: [1, 2, 5, 10, 50]
console.log(sortNumsAscending([80, 29, 4, -95, -24, 85])); // Expected Output: [-95, -24, 4, 29, 80, 85]
console.log(sortNumsAscending(null)); // Expected Output: []
console.log(sortNumsAscending([])); // Expected Output: []

// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

// function findLargestNums(array) {
//   let largestNums = [];
//   for (let i = 0; i < array.length; i++) {
//     const subArray = array[i];
//     let biggest = subArray[0];
//     for (let j = 0; j < subArray.length; j++) {
//       subArray[j] > biggest ? biggest = subArray[j] : biggest;
//     }
//     largestNums.push(biggest)
//   }
//   return largestNums
// }
function findLargestNums(array) {
  let largestNums = [];
  for (let i = 0; i < array.length; i++) {
    const eachElement = array[i]
    let biggest = eachElement[0]
    for (let m = 0; m < eachElement.length; m++) {
      biggest > eachElement[i] ? biggest = eachElement[i] : biggest
    }
    largestNums.push(biggest)
  }
  return largestNums;
}


console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); // ➞ [7, 90, 2]
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); // ➞ [-34, -2, 7]
console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])); // ➞ [0.7634, 9.32, 9]


// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a function that sorts an array and removes all duplicate items from it.



function set(array) {
  // if we want to set the array in a increasing mode
  array.sort();

  // initialize an empty set to store unique items
  let returnArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i - 1]){
        returnArray.push(array[i]) 
      }
  }

  return returnArray;
}


console.log(set([1, 3, 3, 5, 5])); // ➞ [1, 3, 5]
console.log(set([4, 4, 4, 4])); // ➞ [4]
console.log(set([5, 7, 8, 9, 10, 15])); // ➞ [5, 7, 8, 9, 10, 15]
console.log(set([-1, 0, 3, 3, 3, 2, 1])); // ➞ [-1, 0, 1, 2, 3]

// A baseball player's batting average is calculated by the following formula:
// BA = (number of hits) / (number of official at-bats)
// Batting averages are always expressed rounded to the nearest thousandth with no leading zero. The top 3 MLB batting averages of all-time are:
// Ty Cobb .366
// Rogers Hornsby .358
// Shoeless Joe Jackson .356
// The given array represents a season of games. Each array item indicates a player's [hits, official at bats] per game. Return a string with the player's seasonal batting average rounded to the nearest thousandth.

// my aprach is wrong , becouse I wanted to do : 
// first example : 0/0, 1/3, 2/2, 0/4, 1/5 , 0.236 + 0.254 + 0.856 + 0.895 + 0.745 / 5 = 0.286 
// function battingAvg(arrays) {
//   let individualAverage = [];
//   let eachAverage = 0;

//   for (let array = 0; array < arrays.length; array++) {
//     let[nHits, nBats] = arrays[array];
//     let average = parseFloat((nHits / nBats).toFixed(3));
//     individualAverage.push(average)
//   }
//   console.log('individualAverage', individualAverage);


//   for (let average = 0; average < individualAverage.length; average++) {
//     eachAverage += individualAverage[average];
//   }
//   eachAverage /= individualAverage.length;
//   console.log('eachAverage', eachAverage);

//   return eachAverage.toFixed(3);
// }


// console.log(battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]])); //  ➞ ".286"
// console.log(battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]])); //  ➞ ".350"
// console.log(battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]])); //  ➞ ".273"


function battingAvg(arrays) {
  let totalHits = 0;
  let totalBats = 0;

  // Calculate individual batting averages and accumulate total hits and bats
  for (let array = 0; array < arrays.length; array++) {
    const element = arrays[array];
    let [nHits, nBats] = arrays[array];
    totalHits += nHits;
    totalBats += nBats;
  }

  // Calculate overall batting average
  let overallaverage = (totalHits / totalBats).toFixed(3).slice(1);

  return overallaverage;
}

console.log(battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]])); //  ➞ "0.286"
console.log(battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]])); //  ➞ ".350"
console.log(battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]])); //  ➞ ".273"

console.log((0 / 0 + 1 / 3 + 2 / 2 + 0 / 4 + 1 / 5) / 5);

function battingAvgNinaNewAproach(arrays) {
  let average = 0
  for (let i = 0; i < arrays.length; i++) {
    let [n1, n2] = arrays[i];
    if (n2 !== 0) {
      average += n1 / n2;
    }
  }

  return (average / arrays.length).toFixed(3).slice(1);
}

console.log(battingAvgNinaNewAproach([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]])); //  ➞ ".286"
console.log(battingAvgNinaNewAproach([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]])); //  ➞ ".350"
console.log(battingAvgNinaNewAproach([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]])); //  ➞ ".273"

// Create a function that takes an array of 10 numbers(between 0 and 9) and returns a string of those numbers formatted as a phone number(e.g. (555) 555 - 5555).

function formatPhoneNumber(array) {
  let newArray = []
  // verify if array contains just numbers between 0-9
  for (let i = 0; i < array.length; i++) {
    // to long
    // if (array[i] === 0 || array[i] === 1 || array[i] === 2 || array[i] === 3 || array[i] === 4 || array[i] === 5 || array[i] === 6 || array[i] === 7 || array[i] === 8 || array[i] === 9) {
    if (array[i] >= 0 && array[i] <= 9) {
      newArray.push(array[i]);
    } else {
      console.log("the input is not a valid input" + array[1]);
    }
  }

  // console.log('newArray', newArray);

  // format the array
  // slice the array on each 3 element
  let first = array.slice(0, 3).join('');
  let second = array.slice(3, 6).join('');
  let third = array.slice(6).join('');

  let phoneFormat = `(${first}) ${second} - ${third}`
  return phoneFormat;
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //  ➞ "(123) 456-7890"
console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])); //  ➞ "(519) 555-4468"
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])); //  ➞ "(345) 501-2527"

//                             VARIANTA 2


console.log('varianta 2')
function isValidDigit(digit) {
  return digit >= 0 && digit <= 9;
}

function formatPhoneNumberTwo(array) {
  // Validate input
  for (let digit of array) {
    if (!isValidDigit(digit)) {
      console.error("Invalid input: ", digit);
      return null; // Return null to indicate invalid input
    }
  }

  // Format the array
  let first = array.slice(0, 3).join('');
  let second = array.slice(3, 6).join('');
  let third = array.slice(6).join('');

  return `(${first}) ${second} - ${third}`;
}

console.log(formatPhoneNumberTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //  ➞ "(123) 456-7890"
console.log(formatPhoneNumberTwo([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])); //  ➞ "(519) 555-4468"
console.log(formatPhoneNumberTwo([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])); //  ➞ "(345) 501-2527"



// In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).
// Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).
// Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.

function amplify(num) {
  let array = Array(num).fill(1);
  // console.log(array);
  for (let i = 0; i < array.length; i++) {
    array[i] += i;

    if (array[i] % 4 === 0) {
      array[i] *= 10
    }
  }

  return array;
}



console.log(amplify(4)); // ➞ [1, 2, 3, 40]
// Create a sequence from 1 to 4
// 4 is exactly divisible by 4, so it will be 4*10 = 40

console.log(amplify(3)); // ➞ [1, 2, 3]
// Create a sequence from 1 to 3
// There are no numbers that can be exactly divided by 4


console.log(amplify(25)); //  ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// Create a sequence from 1 to 25



// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

function societyName(arrays) {
  let societyName = '';
  for (let array = 0; array < arrays.length; array++) {
    const name = arrays[array].slice(0, 1);
    societyName += name
  }

  return societyName
}

console.log(societyName(["Adam", "Sarah", "Malcolm"]));//  ➞ "AMS"
console.log(societyName(["Harry", "Newt", "Luna", "Cho"])); // ➞ "CHLN"
console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])); //  ➞ "CJMPRR"


// Create a function that takes three parameters where:
// x is the start of the range (inclusive).
// y is the end of the range (inclusive).
// n is the divisor to be checked against.
// Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.

function arrayOperation(x, y, n) {
  let array = [];
  let finalArray = [];
  for (let i = x; i <= y; i++) {
    array.push(i)
  }
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] % n === 0) { finalArray.push(array[i]) }
  }
  
  return finalArray;
}

//                       Varianta 2

function arrayOperation2(x, y, n) {
  let array = [];

  // iterate throught an array in the range x - y and check if it's divisible by n
  for (let i = x; i <= y; i++ ) {
    if (i % n === 0) {
      finalArray.push(i)
    }
  }

  return array;
}

console.log(arrayOperation(1, 10, 3)); //  ➞ [3, 6, 9]
console.log(arrayOperation(7, 9, 2)); //  ➞ [8]
console.log(arrayOperation(15, 20, 7)); //  ➞ []

// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

function maxTotal(array) {
  // Sort the array nums in descending order to ensure the largest numbers are at the beginning
  array.sort((a, b) => b -a );
  // Initialize a variable totalSum to store the maximum total
  let totalSum = 0;
  //Iterate over the first 5 numbers in the sorted array
  //   - Add each number to the totalSum
  let arrayNew = array.slice(0, 5);

  for (let i = 0; i < arrayNew.length; i++) {
    totalSum += arrayNew[i];
  }

  // Return the totalSum as the maximum possible total made by summing just 5 of the 10 numbers
  return totalSum;
}

//                                              Varianta 2

function maxTotal2(array) {
  array.sort((a, b) => b - a); // Sort the array in descending order
  let totalSum = nums.slice(0, 5).reduce((acc, cur) => acc + cur, 0); // Sum the first 5 numbers
  return totalSum;
}


console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])); //  ➞ 43
console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])); //  ➞ 100
console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //  ➞ 40

// Write two functions:

// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.

function toArray(num) {
  return [...String(num)].map(Number);
//   String(num) converts the number to its string representation.
// ... spreads the characters of the string into individual elements.
// map(Number) converts each character back to a number using the Number constructor.
}

function toArray2(num) {
  // Convert number to string
  let string = String(num);
  console.log(string);
  // Initialize an empty array to store digit
  let emptyArray = [];
  // Iterate over each character in the string representation of the number
  for (let i = 0; i < string.length; i++) {
    // Convert character back to integer
    let num = Number(string[i]);
    // Add the digit to the array
    emptyArray.push(num)
  }
  // Return the array of digits
  return emptyArray;
}

function toNumber(array) {
  return Number(array.join(''));
}

console.log(toArray2(235)); //  ➞ [2, 3, 5]
console.log(toArray2(0)); //  ➞ [0]

console.log(toNumber([2, 3, 5])); //  ➞ 235
console.log(toNumber([0]));//  ➞ 0

// Given an array and an integer n, return the sum of the first n numbers in the array.

function sliceSum(array, n) {
  if (n > array.length) return array.reduce((acc, curr) => acc += curr, 0)
  else {
    return array.slice(0, n).reduce((acc, curr) => acc += curr, 0)
  }
}


console.log(sliceSum([1, 3, 2], 2)); //  ➞ 4
console.log(sliceSum([4, 2, 5, 7], 4)); //  ➞ 18
console.log(sliceSum([3, 6, 2], 0)); //  ➞ 0


// A value is omnipresent if it exists in every subarray inside the main array.
// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.

function isOmnipresent(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(element)) return true
    else return false
  }
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); //  ➞ true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); //  ➞ false
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5)); //  ➞ true
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6)); //  ➞ false

// Create a function to count the number of 1s in a 2D array.

function countOnes(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    for (let x = 0; x < array[i].length; x++) {
      // console.log('array[x]', array[x]);
      if (array[i][x] === 1) {
        sum += array[i][x]; // sau mai simplu sum ++;
      }
    }
  }
  return sum;
}

console.log(countOnes([[1, 0],[0, 0]])); //  ➞ 1
console.log(countOnes([[1, 1, 1],[0, 0, 1],[1, 1, 1]])); //  ➞ 7
console.log(countOnes([[1, 2, 3],[0, 2, 1],[5, 7, 33]])); //  ➞ 2


// Create a function that returns true if the first array is a subset of the second. Return false otherwise.

function isSubset(array1, array2) {
  return array1.every(num => array2.includes(num))
}

console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2])); // ➞ true
console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]));//  ➞ true
console.log(isSubset([1, 2], [3, 5, 9, 1])); //  ➞ false

// Write a function that returns the number of users in a chatroom based on the following rules:

// If there is no one, return "no one online".
// If there is 1 person, return "user1 online".
// If there are 2 people, return "user1 and user2 online".
// If there are n>2 people, return the first two names and add "and n-2 more online".
// For example, if there are 5 users, return:

function chatroomStatus(array) {
  console.log(array.length);
  if (array.length === 0) return`no one online`;
  if (array.length === 1) return`${array[0]} online`
  if (array.length === 2) return`${array[0]} and ${array[1]} online`
  if (array.length > 2) return`${array[0]} and ${array[1]} and ${array.length-2} more online`
}

//                  VARIANTA 2

function chatroomStatus2(array) {
  const length = array.length;

  switch (length) {
    case 0:
      return 'no one online';
    case 1:
      return `${array[0]} online`;
    case 2:
      return `${array[0]} and ${array[1]} online`;
    default:
      return `${array.slice(0, 2).join(', ')} and ${length - 2} more online`;
  }
}

console.log(chatroomStatus([])); //  ➞ "no one online"
console.log(chatroomStatus(["paRIE_to"])); //  ➞ "paRIE_to online"
console.log(chatroomStatus(["s234f", "mailbox2"])); //  ➞ "s234f and mailbox2 online"
console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])); // ➞ "pap_ier44, townieBOY and 4 more online


// Given a word, write a function that returns the first index and the last index of a character.
// the first version dose not cover the corner case 3
function charIndex(word, letter) {
  let array = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      array.push(i)
    } 
  }

  if (array.length === 0) {
    return undefined;
  }

  if (array.length === 1) {
    array.push(0);
    return array;
  }
  return array;
}

//              VARIANTA 2

function charIndex2(word, letter) {
  if (!word.includes(letter)) {
    return undefined;
  }

  return [word.inddexOf(letter), word.lastIndexOf(letter)]
}

console.log(charIndex("hello", "l"));//  ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

console.log(charIndex("circumlocution", "c") ); // ➞ [0, 8] but it is [0, 3, 8]
// The first "c" has index 0, the last "c" has index 8.

console.log(charIndex("happy", "h")); //  ➞ [0, 0]
// Only one "h" exists, so the first and last index is 0.

console.log(charIndex("happy", "e")); //  ➞ undefined
// "e" does not exist in "happy", so we return undefined.


// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

function spelling(word) {
  let array = [];
  for (let i = 1; i <= word.length; i++) {
    array.push(word.slice(0, i))
  }
  return array;
}

console.log(spelling("bee")); //  ➞ ["b", "be", "bee"]
console.log(spelling("happy")); //  ➞ ["h", "ha", "hap", "happ", "happy"]
console.log(spelling("eagerly")); //  ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]


// Steve and Maurice have racing snails. They each have three, a slow s, medium m and fast f one. Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is

// Round 1: [s, f] Sacrifice his slowest snail against Steve's fastest.
// Round 2: [m, s] Use his middle snail against Steve's slowest.
// Round 3: [f, m] Use his fastest snail against Steve's middle.
// Create a function that determines whether Maurice's plan will work by outputting true if Maurice wins 2/3 games.

// The function inputs:

// Array 1: [s, m, f] for Maurice.
// Array 2: [s, m, f] for Steve.

function mauriceWins(MauriceWins, SteveWins) {
  let mauriceWinsCount = 0;

  // Check Round 1
  if (MauriceWins[0] < SteveWins[2] && MauriceWins[2] > SteveWins[0]) {
    mauriceWinsCount++;
  }

  // Check Round 2
  if (MauriceWins[1] < SteveWins[0] && MauriceWins[0] > SteveWins[1]) {
    mauriceWinsCount++;
  }

  // Check Round 3
  if (MauriceWins[2] > SteveWins[1] && MauriceWins[1] < SteveWins[2]) {
    mauriceWinsCount++;
  }

  return mauriceWinsCount >= 2;
}

console.log(mauriceWins([3, 5, 10], [4, 7, 11])); //  ➞ true
// Since the matches are (3, 11), (5, 4) and (10, 7), Maurice wins 2 out of 3.

console.log(mauriceWins([6, 8, 9], [7, 12, 14])); //  ➞ false
// Since the matches are (6, 14), (8, 7) and (9, 12), Steve wins 2 out of 3.

console.log(mauriceWins([1, 8, 20], [2, 9, 100])); //  ➞ true



































// this