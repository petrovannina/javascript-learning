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

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient, otherIngredients);
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


// 3.Rest Pattern and Parameters

// -----------DESTRCUTURING-------------
// SPREAD, becouse on RIGHT side of = 
const amm = [1, 2, ...[3, 4]];

// REST, becouse on LEFT side of = 
const [pyt, otd, ...others] = [1, 2, 3, 5, 4];
// elementul REST trebuie sa fie ultimul element
// poate sa existe doar un element Rest 

console.log(pyt, otd, others);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// -------------FUNCTIONS----------------
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
}

add(2, 3);
add(5, 6, 7, 8, 1);
add(8, 6, 5, 4, 2, 3, 9);

const x = [23, 5, 7];

add(...x) //add(23, 5, 7) acelasi lucru


restaurantSecond.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurantSecond.orderPizza('mushrooms');

console.warn("SHORT CIRCUITING");
// && and ||

// ----------OR-------------------
// verifica daca prima e truty si o returneaza , daca prima nu e truty returneaza imediat a doua
// dac sunt mai mult de doua cauta pana gaseste una truty
// returneaza prima valoare truty sau ultima valoare daca toate sunt falsy
// asta poate fi folosit pentru a seta default values ca in exemplu asta : console.log('' || 'Jonas')
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // 'Jonas' becouse '' it's a falsy value 
console.log(true || 0); //true
console.log(0 || true); //true
console.log(undefined || null); //null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello

// FALSY VALUES: false, 0, '', null, undefined, NaN

restaurant.numGuests = 0;
const guests1 = restaurantCopy.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);


// --------------AND----------------
// verifica daca prima a falsy si o returneaza , daca prima nu e falsy returneaza imediat a doua
// dac sunt mai mult de doua cauta pana gaseste una falsy
// returneaza prima falsy value care o gaseste , sau ultima daca toate sunt truty
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Prima varianta
if (restaurantCopy.orderPizza) {
    restaurantCopy.orderPizza('mushroom', 'spinach')
}
// varianta prescurtata la un if care verifica doar daca exista conditia
restaurantCopy.orderPizza && restaurantCopy.orderPizza('mushrooms', 'spinach')
// asta nu inseamna ca trebuie sa inlocuim toate if-urile cu aceasta logica pentru c va fi greu de citit in viitor



console.warn('NULLISH COALESCING OPERATOR');
// NULLISH COALESCING OPERATOR(??)
// nullish values: null and undefined (NOT 0 or '')
// din cauza asta valoare default va fi in acest caz 0
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);



console.warn('Logical ASSIGNMENT OPERATORS');
const rest1 = {
    name: 'Capri',
    numGuests: 0,
}

const rest2 = {
  name: 'La curte',
  owner: 'Nina Petrovan'
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner &&= '<ANONYMOUS>';

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest2.owner &&= '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';


console.log(rest1);
console.log(rest2);

console.warn('CHALLENGE 1');
///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavadr',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowiski',
            'Nina'
        ],
        [
            'Burki',
            'Shulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ]
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
}

// 1.
let [players1, players2] = game.players;
console.log(players1);
console.log(players2);
// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3.
const oldPlayers = [...players1, ...players2];
console.log(oldPlayers);
// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// 5.
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);
// 6.
const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
}

printGoals(...game.scored);

// 7.
team1 < team2 && console.log('team 1 is more likely to win');
team1 > team2 && console.log('team 2 is more likely to win');

console.warn('LOOPING ARRAYS: THE FOR_OF LOOP');
// FOR OF LOOP

const menuNina = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menuNina) console.log(item);

for (const [i, el] of menuNina.entries()) {
    // console.log(item);
    console.log('expresia', `${i + 1}: ${el}`);
}
// contine pentru fiecare elemment un array
// acel array contine index-ul fiecarui element si elementul in sine
console.log(...menuNina.entries());




console.warn('Enhanced Objects Literal');
// Enhanced Objects Literal
const weekDaysN = [
  'luni',
  'marti',
  'miercuri',
  'joi',
  'vineri',
  'sambata',
  'duminica',
];


const openingHoursRestaurant = {
    [weekDaysN[3]]: {
      open: 12,
      close: 22,
    },
    [weekDaysN[4]]: {
      open: 11,
      close: 23,
    },
    [weekDaysN[6]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
}
  

const restaurantMarius = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    // ES6 enhanced objects literal
    // va crea o prorpietate noua care va scota informatia din variabile cu acelasi nume
    // daca modificam numele variabilei va trebui sa modificam si numele acestei proprietati
    openingHoursRestaurant,

    // nu mai e nevoie de cuvantul function si nici de :
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};

console.log(restaurantMarius);

// Optionnal Chaining
if (restaurantCopy.openingHours.mon) console.log(restaurantCopy.openingHours.mon.open);
if (restaurantCopy.openingHours.fri) console.log(restaurantCopy.openingHours.fri.open);

if (restaurant.openingHours && restaurant.openingHours.mon) console.log((restaurant.openingHours.mon.open));
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

for (const day of weekDaysN) {
  console.log(day);
  const open = restaurantMarius.openingHoursRestaurant[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurantMarius.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurantMarius.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }]
const users = [];

console.log(users[0]?.name ?? 'user array empty');

// asa nu
// ar fi fost aceeasi logica ca si: 
if (users.length > 0) console.log(users[0].name); else console.log('user array empty');



console.warn('Looping Objects, Object Keys, Values and Entries');
// Property names
const properties = Object.keys(openingHoursRestaurant);
console.log(properties);

let openStr = `we are open on ${properties.length} days:`;

for (const day of properties) {
    openStr += `${day},`
}

console.log('key', openStr);

// Property values 
const values = Object.values(openingHoursRestaurant);
console.log('values' , values);

// ENTRIES are basicaly : names + values
// ARAYS vs OBJECTS ( arayes- este folosit ca o metoda () / (trebuie sa specificam obiectul) adica ca o functie mai mult)
const entries = Object.entries(openingHoursRestaurant);
console.log('both', entries);

for (const [day, {open, close}] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavadr',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowiski',
//       'Nina',
//     ],
//     [
//       'Burki',
//       'Shulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// CODING GHALENGE #2
// 1.
const scored = Object.entries(game.scored);
const odds = Object.entries(game.odds);
let averageOdds = 0;
console.log(scored);
console.log(odds);

// solutia mea nu e ok pentru ca incepe cu 0 i si este de tip string
for (const [i, player] of scored) {
    console.log(typeof i);
    console.log(`player name and goal is : ${player} ${i + 1}, `);
}

// solutia din video
for (const [i, player] of game.scored.entries())
    console.log(`Goal ${i + 1}: ${player}`);
// 2.
for (const [, odd] of odds) {
    averageOdds += odd;
    averageOdds /= odds.length;
    console.log(typeof odd);
}

console.log('averageOdds', averageOdds);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
    // console.log(team, odd);
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odd of ${teamStr} ${odd}`);
}

// TODO:
/* Bonus: Create an object called 'scores' whitch containes the names of the players who scores as propedties,
 and the number of gols as the value. In this game , it will look like this: 
{
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
}
 */



console.warn('SETS');
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// set are iteralables
// the sets are unique, and the order is irelevant
console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();

console.log(ordersSet); 

for (const set of ordersSet)
    console.log(set);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
console.log(new Set('ninapetrovan').size);



console.warn('MAPS');
const rest = new Map();
rest.set('name', 'clasico italiano');
rest.set(1, 'Rirenze');
rest.set(2, 'Lisbon');
console.log(rest.set(2, 'Lisbon'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open "D')
    .set(false, 'We are closed');
console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

rest.delete(2);
console.log(rest.size);
// rest.clear();
const arrr = [1, 2]
rest.set(arrr, 'Test')
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.get(arrr));




console.warn('MAP ITERACTION');
const question = new Map([
    ['qeustion', 'What is the best programing language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct answer you have'],
    [false, 'try again!']
]);

console.log(question);

const hoursMap = new Map(Object.entries(openingHoursRestaurant));
console.log(hours);

// Quiz app
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3;
// answer = Number(prompt('Your answer'));
console.log(answer);
console.log(question.get(question.get('correct') === answer));

// convert map to array
console.log(...question);
console.log(question.entries());
// trebuie puse parantereze , altfel inetraza ciudat
console.log([...question.keys()]);
console.log([...question.values()]);


// Strings part 1
// Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));

// STRINGS 2
// Working With Strings - Part 2

const airlineS = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const planeS = 'Airbus A320neo';
console.log(planeS.includes('A320'));
console.log(planeS.includes('Boeing'));
console.log(planeS.startsWith('Airb'));

if (planeS.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of NEW Airbus family');
}

// Practice exercise
const checkBaggage = function(items) {
    const bagage = items.toLowerCase();
    if (bagage.includes('knife') || bagage.includes('gun')) {
        console.log(`You are NOT allowed on board`);
    } else {
        console.log('Welcome abord');
    }
}

checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


// String 3
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtman'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizedName = function (name) {
    const eachnameArray = name.split(' ');
    const namesC = [];
    for (name of eachnameArray) {
        // const nameC = name[0].toUpperCase() + name.slice(1);
        // namesC.push(nameC);

        namesC.push(name.replace(name[0], name[0].toUpperCase()));
    }
    console.log(namesC);
}

capitalizedName('Jassica ann smith davis');
capitalizedName('nina petrovan')

// Padding a string
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+').padEnd(45, '..'));

const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*')
}

console.log(maskCreditCard(45236985214587));
console.log(maskCreditCard('25369874115442368455'));


// Repeat
const message2 = 'Bad waether... All Departues Delayed...'; 
console.log(message2.repeat(5));

const planesInLine = function (n) {
    console.log(`There are ${n}planes in line ${'planeemoji'.repeat(n)}`);
}

planesInLine(5);
planesInLine(15);


// Chalenge #4
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    console.log(text);
    const rows = text.split('\n');
    console.log(rows);

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLocaleLowerCase().trim().split('_');
        const output = `${first}${second.replace(second[0], second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
})

// String Practice
const flightsN =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+ _Arrival; bru0943384722; fao93766109; 11: 45 + _Delayed_Arrival; hel7439299980; fao93766109; 12:05 + _Departure; fao93766109; lis2323639855; 12: 30';
  

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// console.log(flightsN.split('+'));
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flightsN.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} ${time.replace(':', 'h')}`.padStart(50);
    
    console.log(output);
}
