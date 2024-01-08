'use strict'

// Lectia 1 (142)

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
// end parameter care nu o sa fie inclus in array-ul pe care il rturneaza
console.log(arr.slice(2, 4));
// cand i dam valoare cu minus o sa ia primele doua valori de la sfarsitul array-ului
console.log(arr.slice(-2));
// incepe sa extraga la pozitia 1 pana la si exceptand ultimele doua
console.log(arr.slice(1, -2));
// putem folosi metoda pentru a primi o copie exacta fara sa dam niciun argument
console.log(arr.slice());

// SPLICE
// acesta modifica array-ul principal
// Priva valoare unde incape sa taie, ultima cu care termina de taiat
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
// modifica arr-ul original
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['a', 'f', 'b', 'h', 'c', 'd', 'e'];
console.log(arr2.reverse());

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
// concat method or spread operator este acelasi lucru
// const letters = arr.concat(arr2); === [...arr, ...arr2];

// JOIN
// returneaza un string cu elemente separate de parametrul nostru
console.log(letters.join('-'));



// Lectia 2 (143)
const arr3 = [23, 45, 89];
console.log(arr3.at(0));

console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));
// arr3[arr3.length - 1] === arr3.slice(-1)[0] === arr3.at(-1)

// Lectia 3 (144)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// FOR OF loop
// for (const movement of movements) {
for(const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

// FOREACH loop
console.log(`--------`);
// 1 parametru: elementul current
// 2 parametru: index-ul curent
// 3parametru: array-ul intreg
movements.forEach(function (movement, index, array) {
    if (movement > 0) {
      console.log(`Movement ${index + 1}: You deposited ${movement}`);
    } else {
      console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
    }
})

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// Lectia 4 (145)

// MAP
const currencies = new Map([
  // key      value
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`)
})

// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// _ is a throwaway variable care inseamnca de fapt o variabila care nu avem nevoie de fapt
currenciesUnique.forEach(function (value, _, map) {
    console.log(`${_}: ${value}`)
})

// Codding challenge #1 (148)
const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);

    const dogs = dogsJuliaCorrected.concat(dogsKate);
    dogs.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`Dog number ${i+1} is an adult, and is ${dog} years old.`);
        } else {
            console.log(`Dog number ${i+1} is still a puppy.`);
        }
    })
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])

// Lectia 5 (150)

// MAP method

const unmovements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
// const movementsUSD = unmovements.map(function (mov) {
//     return mov * eurToUsd;
// });

const movementsUSD = unmovements.map(mov => mov * eurToUsd);

console.log(unmovements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of unmovements) movementsUSDfor.push(mov * eurToUsd);

const movementsDEscriptions = unmovements.map(function (mov, i) {
    return `Movement ${i + 1}: You ${mov > 0 ? 'deposit' : 'You withdrew'} ${mov}`;
})

// Lectia 6 (152)
// FILTER
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const widthdrawal = movements.filter(mov => mov < 0);
console.log(widthdrawal);

// Lectia 7 (153)

console.log(movements);
// reduce tot face un loop asupra array-ului
// acumulator = este ca un bulgure de zapaca care creste si aduna toata valorile , rezultand intr-un singur numar toate = adica suma tuturor valorilor
// accumator -> SNOWBALL
const balance = movements.reduce(function (accumulator, cur, i, arr) {
    console.log(`Iteration ${i} and acumulator ${accumulator}`);
    return accumulator + cur
}, 0)
console.log(balance);

let balance2 = [];
for (const mov of movements) balance2 += mov;
console.log(balance2);

// maximum value
const max = movements.reduce((accumulator, mov) => {
    if (accumulator > mov) return accumulator;
    else return mov;
}, movements[0])
// returns the maximum value in an array

console.log(max);

// Coding challenge #2 (154)
// solutia mea care nu functioneaza 
// nu stiu de ce 
const calcAverageHumanAge = function (dogAges) {
    // 1
    let humanAge;
        dogAges.map((dogAge) => { 
        // console.log(dogAge);
       if (dogAge <= 2) return (humanAge = 2 * dogAge)
       else if (dogAge > 2) return (humanAge = 16 + dogAge * 4);
    })
    // console.log(humanAge);
    // 2
    dogAges.filter((ages) => ages > 18)
    // 3
    dogAges.reduce((acc, ages) => acc = 1.2 * ages)
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// Solution from the video

const calcAverageHumanAge2 = function (ages) {
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
    console.log(humanAges);

    const adults = humanAges.filter(age => age >= 18);
    console.log(adults);

    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    // 23 (2+3)/2 === 2/2 + 2/2
    return average;
}

const avg1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);

// Lectia 8 (155)
// const eurToUsd = 1.1;
// PIPELINE
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
console.log('totalDepositsUSD', totalDepositsUSD);

// splice or reverse method should not be chained
// chaining sould not be over used

// Chanllenge #3 (156)
// wrirwte this function but using chaining and arrow functions 
const calcAverageHumanAge3 = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);

  const adults = humanAges.filter(age => age >= 18);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  // 23 (2+3)/2 === 2/2 + 2/2
  return average;
};

const calcAverageHumanAge4 = function (ages) {
    const humanAges =
      ages
        .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
        .filter(age => age >= 18)
        .reduce((acc, age) => acc + age, 0) / adults.length;
    return humanAges;
}

// Lectia 8 (157)
// o sa reutrneze primul element in array care va satisface aceasta confitie
const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

// example from bankist code
// console.log(accounts);
// const account = acconts.find(acc => acc.owner === 'Jessica Davis');


// Lectia 9 (161)

console.log(movements);
// EQUALITY (verifica doar equality)
console.log(movements.includes(-130));

//SOME: CONDITION (putem specifica o conditie)
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// EVERY: returneaza true daca fiecare element in array reutrneaza true la conditie
console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));  //true

// Separate Callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// Lectia 10 (162)

// FLAT
const arr4 = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
console.log(arr4.flat());
// functioneaza doar pentru primul nivel de deep nesting


// FLATMAP
const arrDeep = [[[1, 2,], 3], [[4, 5], 6], 7, 8, 9];
// pentru acest exemplu dlat nu functioneaza
console.log(arrDeep.flat(2));
// trebuie specificat cate nivele deep trebuie sa mearga


// Lectia 11 (163)

// String
// modifica array-ul principal, nu returneaza unul nou
const oweners = ['Nina', 'CrisTina', 'Valentina', 'Sergiu'];
console.log(oweners.sort());

// Numbers
console.log(movements);
console.log(movements.sort());
// nu functioneaza pe numere /sorteaza dupa strings

// ASCENDENT
// return < 0, A,B  (keep order)
// return > 0, B, A (switch order)
movements.sort((a, b) => {
    if (a > b) return 1;
    else if( a < b) return -1
})
console.log(movements);

// DESCENDENT
movements.sort((a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
});

console.log(movements);

// ASCENDENT simplificat
movements.sort((a, b) => a - b);

// DESCENDENT simplificat
movements.sort((a, b) => b - a);

// Lectia 12 (164)

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
// nicio metoda nu o sa functioneze pe un array gol 
console.log(x.map(() => 5));

// cu exceptia FILL
// 1. numarul/caracterul/cuvantul cu care vrem sa umplem array-ul
// 2. de la care element sa inceapa 
// 3. pana la care element sa termine
x.fill(1, 3, 5);
console.log(x);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

// Throwaway variable
const z = Array.from({ length: 7 }, ( _, i) => i + 1);
console.log(z);

const randomElement = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
console.log(randomElement);

// Daca vrem sa folosim metode pe un querySelectAll node care nu este un array adevarat

// const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     mov => Number(mov.textContent.replace('Euro', ''))
//   );

// Coding Challenge #4

// if food to little -> 10% below
// if food to much   -> 10% above
// if food ok        -> between 10% below and 10% above

// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. 
dogs.forEach(dog => (dog.recomendedFood = Math.trunc(dog.weight ** 0.75 * 28)))

// 2.
const dogSarah = dogs.finds(dog => dog.owners.inludes('Sarah'));
console.log(`Sarah dog is eating to ${dogSarah.curFood > dogSarah.recomendedFood ? 'much' : 'little'}`);

// 3.
const ownersOfDogsEatTooMuch = dogs.filter(dog => dog.curFood > dog.recomendedFood).flatMap(dog => dog.owners);

const ownersOfDogsEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recomendedFood)
  .flatMap(dog => dog.owners)
// .flat();
    
// 4.
console.log(`${ownersOfDogsEatTooMuch.join(' and ')} dogs eat to much`);
console.log(`${ownersOfDogsEatTooLittle.join(' and ')} dogs eat to little`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recomendedFood));

// 6.
const checkEatingOk = dog => dog =>
  dog.curFood > dog.recomendedFood * 0.9 &&
  dog.curFood < dog.recomendedFood * 1.1;
console.log(dogs.some(checkEatingOk));

// 7.
console.log(dogs.filter(checkEatingOk));

// 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);