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






console.log(set([1, 3, 3, 5, 5])); // ➞ [1, 3, 5]
console.log(set([4, 4, 4, 4])); // ➞ [4]
console.log(set([5, 7, 8, 9, 10, 15])); // ➞ [5, 7, 8, 9, 10, 15]
console.log(set([3, 3, 3, 2, 1])); // ➞ [1, 2, 3]








































// this