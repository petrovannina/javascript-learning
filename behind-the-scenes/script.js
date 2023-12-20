'use strict';

// scope working example
function calcAge(birthYear) {
  const age = 2027 - birthYear;
  console.log(firstName);

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);
        
        if (1981 <= birthYear <= 1996) {
            var millenial = true;

            // creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven';

            // reassigning outer scope's variable
            const str = `Oh, and you're a millenial, ${firstName}`
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);

// ---------------------------------------------------------------------------------------------------------------------------------------
// Hoisting with variables
// console.log(me); //undefined
// console.log(jobs); //error: jobs is not defined
// console.log(year); //error: Cannot access 'year' before initialization

var me = "Nina";
let job = 'developer';
const year = 1994;

// Hoisting Functions
// console.log(addDecl()); NaN
// console.log(addExpres()); //  Cannot access 'addExpres' before initialization
// console.log(addArrow()); //Cannot access 'addArrow' before initialization


function addDecl(a, b) {
    return a + b;
}

const addExpres = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// Example"

if (!numProducts) deleteShoppingCart();
// console.log(numProducts);

var numProducts = 10;
function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
// --------------------------------------------------------------------------------------------------------------------------------------
console.error("ACEASTA ESTE !!!!!!!");
console.log(this);

// normal function
function calcAGE(birthYear) {
    const age = 2027 - birthYear;
    console.log(this);
}

// arrow function
const calcAGEarrow = birthYear => {
  const age = 2027 - birthYear;
  console.log(this); //aici this se refera la scopul global , adica window 
}

const Nina = {
    year: 1994,
    calcAge: function () {
        console.log(this);
        console.log(2030 - this.year);
    }
}
console.log(calcAGE());
Nina.calcAge();

// -----------------------------------------------------------------------------------------------------------------
console.error('asta este');
// var firstName = 'Matilda';

const marius = {
    firstName: 'Marius',
    year: 1991,
    calcAGE: function () {
        console.log(this);
        console.log(2023 - this.year);

        // Solution 1:
        // regular function call has the this keyword set to undefined
        // const self = this;
        // const isMellenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }

        // Solution 2:
        // asta va functiona pentru ca arrow function nu are definit this
        // si avem deva o functie mai sus definita , si va lua this din functia de mai sus 
        const isMellenial = () => {
          console.log(this);
          console.log(this.year >= 1981 && this.year <= 1996);
        };

        isMellenial();
    },

    // sau o putem defini ca proprietate separat  
    // isMellenial: function () {
    //     console.log(this);
    //     console.log(this.year >= 1981 && this.year <= 1996);
    // },

    // This de aicea va veni din global scope , adica va cauta o variabila din afara obiectului numita firstName
    // si in acest caz va fi obiectul window
    // nu ar trebui sa folosim niciodata un arrow function ca si metoda 
    // asa da 
    greet: function () {
        console.log(this);
        console.log(`Hey, ${this.firstName}`);
    }
    // asa nu 
    // greet: () => {
    //     console.log(this);
    //     console.log(`Hey, ${this.firstName}`);
    // }
}

marius.greet();
marius.calcAGE();

// arguments keyword
const sumExpr = function (a, b) {
    // ARGUMENTS is a j=keyword!!!
    console.log(arguments);
    return a + b;
}

sumExpr(2, 5);
sumExpr(2, 5, 8, 16)

var adArrow = (a, b) => {
    // console.log('nina!!!!!', arguments);
    return a + b
};

adArrow(1, 6);
// ------------------------------------------------------------------------------------------------------------------------------------------
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const eu = {
    name: 'Nina',
    age: 30,
}

// const tu = {
//   name: 'Nina',
//   age: 30,
// };

// console.log(eu === tu);

const friend = eu;
friend.age = 27;

console.log('Eu', eu);
console.log('FRIEND', friend); 
console.log(eu === friend);

// ----------------------------------------------------------------------------------------------------------------------------------------------
// primitive types
let LastName = "Titica";
let oldLastName = LastName;
LastName = 'Davis';

console.log(LastName);
console.log(oldLastName);

// reference types
const jessica = {
    firstName: 'jessica',
    LastName: 'Williams',
    age: 27,
}

const marriedJesica = jessica;

marriedJesica.LastName = 'Davis';
console.log(jessica);
console.log(marriedJesica);

// copying objects
const alina = {
  firstName: 'jessica',
  LastName: 'Williams',
  age: 27,
};

const maria = Object.assign({}, alina);
maria.LastName = 'davis';

console.log(alina );
console.log(maria);