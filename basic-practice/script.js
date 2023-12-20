'use strict';
let hasDrivesLicense = true;
const passTest = true;

// if (passTest) hasDrisLicetse = true;
if (hasDrivesLicense) console.log('I can drive');

// const interface = 'audio';
// const private = 562;

// -----------------
function logger() {
  console.log('My name is Jonas');  
}

// calling /  running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5, 0);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// ---------------------
// function declaration
function calcAge1(birthYear) {
    const age = new Date().getFullYear() - birthYear;
    return age;
}

const age1 = calcAge1(1970);
console.log(age1);

// anonimos function , becoue we don't have a name
// function expression
const presentAge = function (birthYear) {
     return new Date().getFullYear() - birthYear;
}

console.log(presentAge(1994));

// -----------------------------------------------------------------------

// function expression
function calcAgeNow(birthYear) {
    const age = new Date().getFullYear() - birthYear;
    return age;
}

// Arrow function
const ageNow = birthYear => new Date().getFullYear() - birthYear;
ageNow(1996);

const yearsUntilRetirement =( birthYear, firstName) => {
    const retuirmentAge = 64;
    const ageNowIs = new Date().getFullYear() - birthYear;
    const yearsLeft = retuirmentAge - ageNowIs;
    return `${firstName} retires in ${yearsLeft}`
}

// console.log(yearsUntilRetirement());
console.log(yearsUntilRetirement(1994, 'Nina'));
console.log(yearsUntilRetirement(1996, 'Tina'));

// --------------------------
function cutVegetablePieces(vegetable) {
    return vegetable * 4;
}

function vegetables(carrots, onnions) {
    const carrotsPieces = cutVegetablePieces(carrots);
    const onnionsPrieces = cutVegetablePieces(onnions)
    const dinner = `We will have fried ${carrotsPieces} with ${onnionsPrieces}`;
    // return exits the function thats why we can't console log after the return 
    return dinner;
}

console.log(vegetables(2, 3));

// -------------------
// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// formula from the solution is : (a + b + c) / 3

// Your tasks:
// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

const calcAverage = (par1, par2, par3) => {
    return par1 + par2 + par3;
}

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoals = calcAverage(2, 5, 8);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgKoalas > avgDolphins && avgKoalas >= (avgDolphins*2)) {
        return `Koalas win ${avgKoalas} vs ${avgDolphins}`
    } else if (avgDolphins > avgKoalas && avgDolphins >= (avgKoalas*2)) {
        return `Dolphins win ${avgDolphins} vs ${avgKoalas}`
    } else {
        return `No winners this time !`
    }
}


// Solutia 2
const echipaDolphins = {
    score1: 54,
    score2: 45,
    score3: 41,
}

const echipaKoals = {
    score1: 2,
    score2: 5,
    score3: 8,
}

const calcTotalScore = (obj) => {
    return obj.score1 + obj.score2 + obj.score3
}

function verifyWinner(firstTeam, secondTeam) {
    console.log('firstTeam', firstTeam);
    const scoreFirstTeam = calcTotalScore(firstTeam);
    const scoreSecondTeam = calcTotalScore(secondTeam)
    console.log(scoreFirstTeam);
    console.log(scoreSecondTeam);
    if (scoreFirstTeam > scoreSecondTeam && scoreFirstTeam >= (scoreSecondTeam * 2)) {
        // nu putem folosi numele obiectelor
        return `The winner is ${firstTeam} and the score is ${scoreFirstTeam} vs ${scoreSecondTeam}`
    } else if (scoreSecondTeam > scoreFirstTeam && scoreSecondTeam >= (scoreFirstTeam * 2)) {
        // nu putem folosi numel obiectelor
        return `The wnner is ${secondTeam} and the score is ${scoreSecondTeam} vs ${scoreFirstTeam}`
    } else {
        return `No team is the winner`
    }
}

console.log(verifyWinner(echipaDolphins, echipaKoals));

// Solutia 3 
class echipa {
    constructor(name, score1, score2, score3) {
        this.name = name;
        this.score1 = score1;
        this.score2 = score2;
        this.score3 = score3;
    }

    sumTotalScore() {
        return this.score1 + this.score2 + this.score3;
    }
}

const echipaAlbastra = new echipa('albastra', 54, 36, 48);
const echipaAlba = new echipa('alba', 12, 5, 6);

function verWinner(team1, team2) {
    const scoreteam1 = team1.sumTotalScore();
    const scoreTeam2 = team2.sumTotalScore();

    if (scoreteam1 > scoreTeam2 && scoreteam1 >= (scoreTeam2 * 2)) {
        return `The winner is ${team1.name} and the score is ${scoreteam1} vs ${scoreTeam2}`
    } else if (scoreTeam2 > scoreteam1 && scoreTeam2 >= (scoreteam1 * 2)) {
        return `The winner is ${team2.name} and the score is ${scoreTeam2} vs ${scoreteam1}`
    } else {
        return `No winner this time!`
    }
}

console.log(verWinner(echipaAlbastra, echipaAlba));

// -------------------------------------------------------

