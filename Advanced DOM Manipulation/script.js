'use strict';

console.log(23 === 23.0);

// base 10 - 0 to 9
// binary base 2 - 0

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); //ar trebui sa fie true , eroare de js , si trebuie sa acceptam ca asta e modul in care functioneaza

// Conversion
console.log(Number('23')); /// numbers(23) === +('23')
console.log(+ 23);

// Parsing
console.log(Number.parseInt('30px'), 10);
console.log(Number.parseInt('e23'), 10);

// se foloseste oricand dorim sa citim o valoare dintrun string
console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));

// Verifica doar daca faloarea nu este un numar 
console.log('IsNaN');
console.log(Number.isNaN(20));  // false (ai crede ca ne da true , dar este un numar prin urmare false)
console.log(Number.isNaN('20'));  //false (ai crede ca o sa ne dea true)
console.log(Number.isNaN('20x'));  //false
console.log(Number.isNaN(+'20x')); //true
console.log(Number.isNaN(23 / 0)); // sa impartim cu 0 nu este permis in matematica pentru ca ne da infinit

// asta e mai buna sa verificat daca ceva este un numar sau nu
console.log('isFinite');
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23/0));

// verifica daca este un numar
console.log('isInteger');
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(+'20x'));



// Lectia nr.2 (172)
console.warn('Lectia nr 2');
console.log(Math.sqrt(25)); // radical din 5
console.log(25** (1/2));    // 25 / 0.5
console.log(8 ** (1/3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.floor(Math.random() * 6)); // 1-5
console.log(Math.trunc(Math.random() * 6) + 1); // 1-6

// o sa ne returneze un numar care va sta mereu intre min si max
const randomInt = (min, max) => Math.floor(Math.random() * (max-min) + 1) + min;
// 0...1 -> 0...(max-min) -> min...max

console.log(randomInt(10, 20))

// Rounding integers
console.log(Math.trunc(23.3)); //sterge doar partea decimala
console.log(Math.round(23.9)); // rotunjeste la 24

console.log(Math.ceil(23.3)); //24 va rotunji in sus
console.log(Math.ceil(23.3)); //24

console.log(Math.floor(23.3)); //23 va rotunji in jos
console.log(Math.floor(23.9)); //23
console.log(Math.floor('23.9')); //face si 'type coercion' deci si asta va functiona

// foor and trunc taie decimalele cand folosim numere pozitive
console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.3)); //-24
// cica floor functioneaza mai bine , pentru ca e constat si la numere pozitive si la negative

// Rounding decimals
console.log((2.7).toFixed(0)); //3(va avea culoarea alba in console) returneaza mereu un string 
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35
// +() converteste un string in numar
console.log((+(2.345)).toFixed(2)); // 2.35( va avea culoarea mov , ceea ce arata ca e numar in console)



// Lectia 3(173)
// Remaining operator
console.log(( 5 % 2)); //1 , 2 la puterea 2 este 4 , rest 1 (returneaza restul)
console.log(5/2); // 5 = 2 * 2 + 1 (1 este reminder)

console.log(8 % 3);
console.log(8 / 3); //8 = 2 * 3 + 2 (2 reminder)

// Even/Odd
console.log(6 % 2); // remainder 0
console.log(7 % 2); //remainder 1

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));



// Lectia 4 (174)
// Numeric Separators
// 287.460.000.000
const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);
// va ignora _ din numar, e doar pentru citit numarul

const transferFeed1 = 15_00;
const transferFeed2 = 1_500;

// const PI = 3._1415;
// console.log(PI); // error becouse it's not allowed

console.log(Number('230_000'));
console.log(parseInt('230_000'));



// Lectia 5 (175)
// este o limita cat de mare numarul poate fi
console.log('asta este numarul "safe" care javascript in poate afisa/calcula', 2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER); //acelasi
// orice numar mai mare decat acesta nu este safe


console.log(5403548978645132131564889748464n); // transforma numar normal in numar BigInt 
console.log(BigInt(5214523698521452368854785125369854785));

//  Operations
console.log((10_000n + 10_000n));
console.log(521452698547852145236589n * 145236589654785125369854785412589632541n);
// dar nu putem folosi BigInt cu numere obisnuite
// console.log(Math.sqrt(16n)); // error
// deci functiile de Math nu se aplica pe bigInt


const huge = 20125631452365896n;
const num = 23;
console.log(huge * BigInt(num));

// Logical operations are exceptions
console.log(20n > 15); //true
console.log(20n === 20); //false ( nu face type coercions -> tye primitive sunt diferite)
console.log(20n == 20);//true

console.log(typeof 20n);//bigint

// Strin concatenation are also exepcionts
console.log(huge + 'is REALLY BIG!!!');
console.log(10n / 3n); // 3n (nu afiseaza decimalele)
console.log(10 / 3 ); //3.333333333333333333
console.log(20 + '20');

// Lectia 6 (176)
// Create a date
const now = new Date();
console.log(now);

// new Date() == este un constructor/obiect special
console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));
console.log(new Date(2037, 10, 33));

console.log(new Date(0));
// 3 zile , 24 de ore, 60 de secunde , 100 de milesecunde
console.log(new Date(3 * 24 * 60 * 1000)); // Jan 4 (le inmulteste pe toate si ajunge la aceasta data)

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // nu folosi getYear
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay()); // day of the week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getMilliseconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

// Lectia 7 (178)
const future2 = new Date(2037, 10, 19, 15, 23);
const futureNumber = +future; //1704977099438
// Number(future) === +future  (nu mai stiu exact dece)

// Math.abs ( ia numarul mai mare sil scade pe primul indiferent ca este primul sau al doilea parametru mai mare)
const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const day1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24))
console.log(day1);
// daca avem nevoie de calcule mai precise cu cazuri mai spexiale sau corner cases putem folosi moment.js(librarie)

// Lectia 8 (180)
const num1 = 2563145269852.25;
console.log('US: ', new Intl.NumberFormat('en-UE', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(navigator.language, new Intl.NumberFormat('ar-SY', options).format(num));

const options = {
  style: "currency",
  unit: 'celsius',
  currency: 'EUR',
  useGrouping: false,
}

// Lectia 8 (181)
const ingredients = ['olives', 'spinach']
const pizzaTimer = setTimeout((ing1, ing2)=> {`Here is your pizza ${ing1}, ${ing2} `}, 3000, ...ingridients);
console.log(`Waiting...`);

if(ingredients.includes('spinach')) clearTimeout(pizzaTimer)

// setInterval
setInterval(() => {
  const now = new Date();
  console.log(now);
}, 1000);
// se efectueaza tot la fiecare secunda 
// every second is displayed the date



































