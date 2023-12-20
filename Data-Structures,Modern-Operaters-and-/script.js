// 1. Destructuring Arrays
'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },


    openingHours: {
        thu: {
        open: 12,
        close: 22,
        },
        fri: {
        open: 11,
        close: 23,
        },
        sat: {
        open: 0, // Open 24 hours
        close: 24,
        },
    },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// cand javascript vede semnul egal aicea , el face destructurizare atita timp cat declaram varabilele inainte 
// si acest proces nu aduce nicio modificare la array-ul initial :) 
const [d, e] = arr;
console.log(e);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// daca dorim sa schimbam intre ele asignarea adica first = second value si second = first value
// aceasta fiind prima solutie cum am putea sa o facem 
// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;

// sau asa, reasignand valoarea variabilelor 
[secondary, main] = [secondary, main]
console.log(main, secondary);

// ne va returna un array 
console.log(restaurant.order(2, 0));
// si daca vrem sa facem un destructiv si la acest array 
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);


const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// asa functioneaza destructuring inauntru la un alt destructuring
// adica NESTED DESTRUCTURING
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r);
// dar daca le setez valori default nu vom mai primi erroarea cu undefined
const [g = 1, h = 2, w = 4] = [10, 11];
console.log(g, h, w);


console.warn("DESTRUCTING OBJECTS");
// 2. Destructing objects
const restaurantSecond = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
        },
    
        orderDelivery: function ({
            starterIndex = 1,
            mainIndex = 0,
            time = '20:00',
            address,
    }) {
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    },
  

    orderPasta: function(ing1, ing2, ing3) {
        console.log('Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}');
    },

    openingHours: {
        thu: {
        open: 12,
        close: 22,
        },
        fri: {
        open: 11,
        close: 23,
        },
        sat: {
        open: 0, // Open 24 hours
        close: 24,
        },
    },
};

restaurantSecond.orderDelivery({
    time: '23:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
})

// Default values
const { name, openingHours, categories } = restaurantSecond;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;

const { menu = [], starterMenu: starters = [] } = restaurantSecond;
console.log(menu, starters);

// Mutating variables
// de ce variabilele astea nu functioneaza decat cu acelasi nume ?
// pentru ca le reasignam valoarea ? cred ca da 
let nina = 111;
let tina = 999;
const obj = { nina: 23, tina: 7, c: 19 };
({ nina, tina } = obj);
console.log(nina, tina);

// Nested objects
const { fri: {open: o, close: ci} } = openingHours;
// console.log(fri);
console.log(o, ci);

console.warn("THE SPREAD OPERATOR")
// 3. The Spread Operator
const array = [7, 8, 9];
// ASA NU !!
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

// ASA DA!!
const newArray = [1, 2, ...arr];
// asta va face console la elementele in sine
console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu]; 
console.log(mainMenuCopy );

// Join 2 arrays
const menuNou = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuNou);

// Iterables : arrays, string , maps, sets. NOT objects

const string = "jonas";
const letters = [...string, '', 'S.'];
console.log(letters);

// nu va functiona pentru ca ${} nu primeste valori multiple , doar una singura
// console.log(`${...str} Schmeotmann`);

// real-world example
// comantat pentru ca are prompt
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];

// console.log(ingredients);
// // asa am fi facut inainte
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // dar asa facem acuma
// restaurant.oerderPasta(...ingredients);

// objects
const newRestaurant = { ...restaurant, founder: 'Nina', foundingYear: 1994 }
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Marius';

console.log(restaurantCopy.name);
console.log(restaurant.name);