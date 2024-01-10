'use strict';
const bookings = [];

const createBooking = function(flightNum,
                               numPassengers = 1,
                               price = 199 + numPassengers) {
  // before ES6
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  
  const booking = {
    flightNum,
    numPassengers,
    price,
  }

  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH1230', 2, 800);
createBooking('LH1230', 2);
createBooking('LH1230', 5);


// Lectia nr 2 (129)
const flight = 'LH123';
const nina = {
  name: 'Nina Petrovan', 
  passport: 245896315478
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr' + passenger.name;
  if(passenger.passport === 245896315478) {
    console.log('check in');
  } else {
    console.log('Wrong passport!!');
  }
}

checkIn(flight, nina);
console.log(flight);
console.log(nina);

// Is the same as doing...
const flightNum = flight;
const passenger = nina;

const newPassport =  function(person) {
  person.passport = Math.random() * 1000000000000;
}

newPassport(nina);
checkIn(flight, nina);
// Javascript nu are passing by reference , doar passing by values



// Lectia 3 (130)

/* 
fuctions sunt de fapt un alt tip de obiecte
obiectele sunt de fapt valori
*/

/* 
HIGHER_ORDER sunt functii care fie : 
                primesc o alta functie ca argument
                returneaza o functie noua
*/

// Lectia 4 (131)

const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transfformer = function(str, fn) {
  console.log(`Original string ${str}`);
  console.log(`transformer string: ${fn(str)}`)
  // return fn(str);
  console.log(`Transformed by ${fn.name}`);
}

transfformer('Javascript is the best', upperFirstWord);
transfformer('Javascript is the best', oneWord);

// JS uses callbacks all the time
const high5 = function() {
  console.log('high5');
}

// in this example the high5 ic the callback function as in the examples above
document.body.addEventListener('click', high5);
// in this example as well the callback function will be the high5
['Jonas', 'Martha', 'Adam'].forEach(high5);


// Lectia 5 (132)
const greet = function(greeting) {
  console.log('greeting', greeting);
  return function(name) {
    console.log(`${greeting} ${name}`);
    console.log('name', name);
  }
}

const greeterHey = greet('Hey');
// const greeterHey = greet('Orice ar fi');
greeterHey('Nina');
greeterHey('Steven');

greet('Hello')('Marius');
// const greet = function(greeting) {
  // wririte this function with arrow functions
//   console.log('greeting', greeting);
//   return function(name) {
//     console.log(`${greeting} ${name}`);
//     console.log('name', name);
//   }
// }

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greet('Hi')('Elena !! ');

// Lectia 6 (133)
const lufthansa = {
  name: 'lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightNum, nameF) {
    console.log(`${nameF} booked a seat on ${this.name} flight ${this.iataCode}${flightNum}`),
    this.booking.push({flight: `${this.iataCode}${flightNum}`, nameF})
  },
}

lufthansa.book(239, 'Nina Petrovan');
lufthansa.book(635, 'Marius Petrovan');
console.log(lufthansa);

const eurowings = {
name: 'Eurowings',
iataCode: 'EW',
booking: [],
}

const book = lufthansa.book;
// DOES"T work
// book(23, 'Sarah Williams');

/* 
The Call 
Apply Methods
-fuctioneaza facand metoda cao functie
-te lasa sa setezi manual 'this' specificand primul parametru
*/

book.call(eurowings, 23, 'Sara Williams');
console.log(eurowings);


book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  name: 'Swiss Air Lines',
  iataCode: 'LX',
  booking: [],
}

book.call(swiss, 584, 'Iachim Cristina')
console.log(swiss);

const flightData = [584, 'George Cooper'];


// This is the same
book.apply(swiss, flightData);
// as this
book.call(swiss, ...flight);

// Lectia 7 (134)
// The bind method
/*
-nu seteaza imediat this, dar returneaza o functie noua
-in aceasta functie 'this' este bound

*/

const bookEw = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEw(589, 'Titica Valentina');

const bookEW23 = book.bind(eurowings, 98);
bookEW23('Nina Petrovan');

// with event listeners
lufthansa.planes = 200;
console.log(typeof lufthansa.planes);
lufthansa.buyPlane = function() {
  console.log(this);

  this.planes++;
  console.log(this.planes);
}
// lufthansa.buyPlane();

// cand avem un event handler this tot timpu puncteaza catre elementul de care este atasat
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
 
// partial aplication
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(523));
console.log(addVAT(23));

// const addVAT1 = addTax = (null, 0.23) => value => value + value; 
const addTaxRate = function(rate) {
  return function(value) {
    return value + value * rate;
  }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT(523));
console.log(addVAT(23));

// Lectia 8 (135)
// Codding challenge
// call si bind seteaza un nout this , care puncteaza catre alt element inafara de cel default
// soutia mea 
const poll = {
  question: 'What is your favourite programing language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userAnswer = prompt(`What is your favprite programing language?
    0: Javascript
    1: Python
    2: Rust
    3: C++
    (write option number)
    `);
    if(0 <= userAnswer <= 3) {
      this.answers[userAnswer]++;
    } else {
      prompt(`The answer is incorect! Plase try again`)
    }

    // metoda asta trebuie sa fie apelatala sfarsitul lui registerNow de fiecare data
    this.displayResults();
  },

  displayResults(type) {
    console.log(typeof type);
    // daca answers sunt de tip string => 
    // daca sunt de tip array =>
  }
};

document.querySelector(".answer-poll").addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.registerNewAnswer();
console.log(poll);

// solutia lui
const poll2 = {
  question: 'What is your favourite programing language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    // get the answer
     const answer = Number(prompt(`${this.question}\n
                            ${this.options.join('\n')}\n
                            (Write option number)
     `));
     // register
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if(type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }
};

document.querySelector('.answer-poll2').addEventListener('click', poll2.registerNewAnswer.bind(poll2));

poll2.displayResults.call({answers: [5, 2, 3]}, 'string');
// [3, 5, 9]
// [1, 5, 9, 7, 8, 3]

// Lectia 9 (136)
// Immediately invoked function
const runOnce = function() {
  console.log(`This will never run again`);
};
runOnce();

(function() {
  console.log(`This is the second try`);
  // this variables is encapsulated in this function
  const isPrivate = 23;
})();


(() => console.log(`This will also never run again`))();

{
  const isPrivate = 23;
  var notPRivate = 46;
}

// console.log(isPrivate);
console.log(notPRivate);
// Lectia 10 (137)
// Closures
// nu putem crea un closure, ca si pe un array sau obiect
// closure se intampla automat in anumite situatii 
// closure face ca functia sa isi aminteaza toate variabilele care au existat in momentul initierii functiei


const secureBooking1 = function() {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
};

const booker1 = secureBooking1();

booker1();
booker1();
booker1();

// Lectia 11 (138)

// 137

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

// any function always has acces to the variable environment of the execution context in witch the function was created

// 138

// nu trebuie sa avem o functie in alta functie ca sa avem un closure

// exemple:
let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};

g();
f();
console.dir(f)

// Re-assigning f function
h();
f();
console.dir(f);

// example 2:

const boardPassengers = function (n, wait) {
    // const perGroup = n / 3;
    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers.`);
        console.log(`There are 3 groups, each with ${perGroup} passengers.`);
    }, wait * 1000)

    console.log(`Will start boarding in ${wait} seconds.`)
}

const perGroup = 1000;
boardPassengers(180, 3);

// Coding Chanllenge

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    header.addEventListener('click', function () {
        header.style.color = 'blue';
    })
})();