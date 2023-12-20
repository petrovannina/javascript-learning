// Arrays and basic methods :) 
const friend1 = 'Michael';
const friend2 = 'Nina';
const friend3 = 'Dragos';

const friends = ['Nina', 'Tina', 'Ptira'];
console.log(friends);

const years = new Array(1991, 1985, 1452, 1256);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log('friends[friends.length - 1]', friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const nina = ['Nina', 'Petrovan', 2023 - 1994, 'developer', friends];
console.log(nina);

const agE = function (birthY) {
    return 2023 - birthY;
}

const age1 = agE(years[0]);
const age2 = agE(years[1])
const age3 = agE(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [agE(years[0]), agE(years[1]), agE(years[2])]
console.log(ages);

// ----------------------------------------------------------------------------------------------------------------------------------------
// Methods

friends.push('Jay') // adds an element to the array
console.log(friends);

const newLenght = friends.push('Maria'); //push methods return the lenght of an array as well 
console.log(newLenght);

friends.unshift('John'); //add an element in the first position of the array
console.log(friends);

friends.pop() //remove the last element of the array
console.log(friends);

friends.shift() //deletes the first element in an array
console.log(friends);

// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// And now let's use arrays! So, create an array called bills containing the test data below.
// Create an array called tips containing the tip value for each bill, calculated from the function you created before.
// BONUS: Create an array totals containing the total values, so the bill + tip.
// TEST DATA: 125, 555, and 44.

const bills = [125, 555, 44];

// first version MY VERSION
function calcTip(bill) {
    if (50 < bill < 300) {
        return bill*0.15
    } else {
        return bill*0.2
    }
};

// others versions

const calTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

const caculateTip = bill => 50 <= bill <= 300 ? bill * 0.15 : bill * 0.2

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

const bill1 = bills[0];
const bill2 = bills[1];
const bill3 = bills[2];

const total1 = bills[0] + tip1;
const total2 = bills[1] + tip2;
const total3 = bills[2] + tip3;


const tips = [tip1, tip2, tip3];
const totals = [total1, total2, total3];

console.log(bills, tips, totals);

// ----------------------------------------------------------------------
// incearca sa optimizezi , sa scrii cod curat si simplu de citit


const JonashArray = [
    'Jonas',
    'djhdshdoakd',
    2023 - 1994,
    'developer',
    ['ion', 'vasile', 'Steven']
]

const jonas = {
    firstName: 'Nina',
    secondName: 'Petrovan',
    age: 2023 - 1994,
    job: 'developer',
    firends: ['ion', 'vasile', 'maria']
}

console.log(jonas, JonashArray, jonas);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['second' + nameKey]);
 

// const argumentValue = prompt('what do you want to know about jonas? Chose between firstName, lastName, age, job, and friends');
// console.log(jonas[argumentValue]);

// if (jonas[argumentValue]) {
//     console.log(jonas[argumentValue]);
// } else {
//     // prompt('wrong rquest!Chose between firstName, lastName, age, job, and friends ');
// }

jonas.location = 'Chisinau';
jonas['facebook'] = '@ninapetrovan';

console.log(jonas);

// Challenge


console.log(jonas.firends.length);
console.log(jonas.firends[0]);

console.log('inainte de obiect');

const ninaP = {
    firstName: 'Nina',
    secondName: 'Petrovan',
    birthYear: 1994,
    job: 'developer',
    firends: ['ion', 'vasile', 'maria'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    // }

    // calcAge: function () {
    //     console.log('aici e this' , this);
    //     return 2023 - this.birthYear;
    // }

    checkDriversL: function () {
        this.check = this.hasDriversLicense ? 'a' : 'not'
        console.log('this.hasDriversLicense', this.hasDriversLicense);
        console.log('e this din checkDrivers',this);
        return this.check
    },

    calcAge: function () {
        this.age = 2023 - this.birthYear
        console.log('e this din calcAge', this);
        return this.age;
    }
    
}
console.log('dupa de obiect');

console.log('nina age', ninaP.calcAge());
console.log(ninaP.checkDriversL());
console.log('ninaP age', ninaP.age);


// e acelasi lucru
// console.log('nina age', ninaP['calcAge'](1994));
// console.log('nina age', ninaP.calcAge(1994));

// chalenge
console.log(ninaP.hasDriversLicense);
console.log(`${ninaP.firstName} is a ${ninaP.age}-year old ${jonas.job}, and he has ${ninaP.check} driver's license`);

// Chalenge #3
// Let's go back to Mark and John comparing their BMIs!
// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).
// Your tasks:
// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.
// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.
// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

const Mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 56,
    height: 1.55,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
}

const John = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 99,
    height: 1.80,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
}

console.log(Mark.calcBMI());
console.log(John.calcBMI());

// ---------------------------------------
console.log('Lifting weights repetition 1 emoji');
console.log('Lifting weights repetition 2 emoji');
console.log('Lifting weights repetition 3 emoji');
console.log('Lifting weights repetition 4 emoji');
console.log('Lifting weights repetition 5 emoji');
console.log('Lifting weights repetition 6 emoji');
console.log('Lifting weights repetition 7 emoji');
console.log('Lifting weights repetition 8 emoji');
console.log('Lifting weights repetition 9 emoji');
console.log('Lifting weights repetition 10 emoji');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} emoji`);
}

const jonasW = [
    'jonas',
    'Petrovan',
    2023 - 1994,
    'developer',
    ['Michael', 'PEter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonasW.length; i++) {
    // reading from jonas array
    console.log(jonasW[i], typeof jonasW[i]);

    // filling types array
    // types[i] = typeof jonasW[i];

    types.push(typeof jonasW[i])
}

console.log(types);
const yearss = [1991, 2007, 1969, 2024];
const agess = [];

for (let i = 0; i < yearss.length; i++) {

    agess.push(2023 - yearss[i]);
}

console.log(agess);
console.log();

// continue
for (let i = 0; i < jonasW.length; i++) {
    if (typeof jonasW[i] !== 'string') continue;
    // reading from jonas array
    console.log('CONTINUE', jonasW[i], typeof jonasW[i]);
}

// break
for (let i = 0; i < jonasW.length; i++) {
    if (typeof jonasW[i] === 'number') break;
    // reading from jonas array
    console.log('BREAK', jonasW[i], typeof jonasW[i]);
}


const marius = [
    'marius',
    'Petrovan',
    2023 - 1994,
    'developer',
    ['Michael', 'PEter', 'Steven'],
    true
];
const petrovan = [];

for (let index = marius.length - 1; index >= 0; index--) {
    console.log(index, marius[index]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---------------Starting exercise ${exercise}`);

    for (let rep = 0; rep < 6; rep++) {
        console.log(`Lifting weight repetiton ${rep}`);
        
    }
}

let rep = 1;
// while (rep <= 10) {
//     // console.log(`This is my while loop ${rep}`);
//     // rep++;
// la sfarsitul unui loop ar trebui sa adaugam conditia care sa modifice argumentul pe care il primeste metoda while, altfel o sa creem un infinity loop mj;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// folosim while loop cand nu stim cate iteratii se vor efectua
// cand stim cate iteratii se vor face atunci folosim for  
while (dice !== 6) {
    console.log(`This number is ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`Loop is about to end ...`);
    }
}
// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:
// Create an array called bills containing all 10 test bill values.
// Create empty arrays for the tips and the totals (tips and totals)
// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



// BONUS:
// Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:
// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.
// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).
// Call the function with the totals array.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture
const calculationOfTheTip = function (bill) {
    return 50 <= bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const billes = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipess = [];
const totales = [];

for (let i = 0; i < billes.length; i++) {
    const tip = calculationOfTheTip(billes[i])
    tipess.push(tip);
    totals.push(tip + billes[i]);
}

// mai scrie o data functia aceasta !!!! 
const calculationAverage = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        // console.log('acesta este 1', array[i]);
        sum += array[i]; 
        // console.log('SUMMMMMMM in functie', sum);
    }
    return sum / array.length;
}

calculationAverage(billes);
console.log('SUM' , calculationAverage(billes));


console.log(billes);
console.log(tipess);
console.log(totals);


// ---------------------------------------
console.log('-----------------------------------------------');

let scoreDolphins = 56;
let scoreKoalas = 45;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy" );
} else if (scoreKoalas >  scoreDolphins) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}

const scoreDolphinsTwo = (97 + 112 + 89) / 3;
const scoreKoalasTwo = (88 + 100 + 110) / 3;
const minScore = 100;

if (scoreDolphinsTwo > scoreKoalasTwo && minScore) {
    console.log("Dolphins win the trophy" );
} else if (scoreKoalasTwo > scoreDolphinsTwo && minScore) {
 console.log("Koalas win the trophy");
} else if (scoreDolphinsTwo > minScore && scoreKoalasTwo > minScore) {
    console.log("Both win the trophy");
} else {
    console.log('nada');
}

// ---------------------
const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Today is Monday');
        console.log('Coding meetup');
        break;
    case 'tuesday':
        console.log('Today is Tuesday');
        console.log('Coding meetup');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('code example');
        break;
    case 'friday':
        console.log('this is my code');
        break;
    case 'saturday':
    case 'sunday':
        console.log("It's weekend!!");
        break;
    default:
        console.log("Not a valid day!!");
}

// --------------------------------
// To calculate 20% off a value, simply multiply it by 20/100 = 0.2
// example 20% from 430 = 430*0.2

const bill = 430;
const tipSmall = (15*bill)/100;
const tipBigger = (20*bill)/100;

/* Write your code below. Good luck! 🙂 */

let tipForBill = (bill > 50 && bill < 300) ? tipSmall : tipBigger ;
console.log(`The bill was ${bill}, the tip was ${tipForBill}, and the total value was ${bill + tipForBill}`);



// Solutia nr 2
const person = {
    name: 'billy',
    check: 430,
}

const tipS = (15*person.check)/100
const tipSB = (15 * person.check) / 100

let tipForTheTable = (person.check > 50 && person.check < 300) ? tipSmall : tipBigger;
console.log('Solutia nr 2');
console.log(`The bill was ${person.check}, the check was ${tipForTheTable}, and the total value was ${bill + tipForBill}`)


// Solutia nr 3
console.log('Solutia nr 3');
class persoana {
    constructor(name,chitanta) {
        this.name = name;
        this.chitanta = chitanta;
    }


    bacsis() {
        return (this.chitanta >= 50 && this.chitanta <= 300) < 300 ? ((15 * this.chitanta) / 100) : ((20 * this.chitanta) / 100);
    }
}



const Nina = new persoana('nina', 450)
Nina.bacsis();

console.log(`The bill was ${Nina.chitanta}, the check was ${Nina.bacsis()}, and the total value was ${Nina.chitanta + Nina.bacsis()}`);

// -----------------------------------------------------------------------------------------------------------------------------------------
// Problem:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of tmperaturs of one day , calculate the
//  temperature amplitude.Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -289, -1, 'error', 9, 154, 17, 158, 14, 9, 5]
// understandint the problem
// What it temp amplitude? Answer: difference between highest and lowest temp
// How to compute max and min temperatures?
// What's a sensor error? And what do do ?
 

// breaking up into sub-problems
// How to ignore errors?
// - Find max value in temp array
// Find min value in temp array
// Subtract min form max (amplitude) and return

const calcTempAmplitude = function (t1, t2) {
    const temps = t1.concat(t2);

    console.log(temps);
    let max = temps[0]; 
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        let curTemp = temps[i]

        // citeste mai multe despre continue
        // continue opreste interatia care este in desfasurare in momentul in care afirmatia este true
        // si din caua ca opreste iteratia in sine trece la ulmatorul obiect/element din array
        if (typeof curTemp !== 'number') continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    console.log('calcTempAmplitude max and min', max, min);
    
    return max - min;
};

const amplitude = calcTempAmplitude(temperatures,[12598746]);
console.log(amplitude);

// don't be afraid to do as much research as you have to

// for bigger problems, write pseudo-code before writing the actual code

// --------------------------------------------------------------------------------------------------------------------------------------

const measureKelvin = function (params) {
    const measurement = {
      type: 'temp',
      unit: 'cels',
      //
    //   value: Number(prompt('Degrees celsius:')),
    };
    console.log(measurement);
    // console.warn(measurement.value);
    // console.error(measurement.value);
    // console.table(measurement);

    const Kelvin = measurement.value + 273;
    return Kelvin;
}

console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];

    // citeste mai multe despre continue
    // continue opreste interatia care este in desfasurare in momentul in care afirmatia este true
    // si din caua ca opreste iteratia in sine trece la ulmatorul obiect/element din array
      if (typeof curTemp !== 'number') continue;

    //   debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log('calcTempAmplitude max and min', max, min);

  return max - min;
};

calcTempAmplitudeBug(temperatures, temperatures)

// -------------------------------------------------------------------------------------------------------------------------------------------
// Givern an array of forecasted maximum temperatures, the thermometer displays a string with these
// temperatures
// Example: [17, 21, 23] will print "... 17'C in 1 days ...21'C in 2 days ... 23'C in 3 days ..."
// Create a function 'printForecast' wich takes in an array 'arr' and logs a string like the above to the
// console.
// Use the problem-solving framework: Understand the problem and break it up sub-problems:

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

myarray = [17, 21, 23]
myarraytwo = [12, 5, -5, 0, 4]

function printforecast(arr) {
    // arr.join('');
    let sentence = ``;
    for (let i = 0; i < arr.length; i++) {
        let element = String(arr[i]); 
        console.log(typeof `...`);
        sentence = sentence + '...' + element;
        console.log(sentence);
    }


}

printforecast(myarray);