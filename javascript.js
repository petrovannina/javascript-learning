// #primul exemplu fain
/* Write your code below. Good luck! 🙂 */

// SOLUTIA NR1
// const BMI = mass / (height * height);
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);

// SOLUTIA NR2
const Mark = {
    mass: 78,
    height: 1.69,
}

const John = {
    mass: 92,
    height: 1.95,
}

function BMI(obj) {
    return obj.mass / (obj.height ** 2)
}

BMI(Mark);
BMI(John);

// SOLUTIA NR3
class person {
    constructor(mass, height) {
        this.mass = mass;
        this.height = height;
    }

    BMI() {
        return this.mass / (this.height ** 2)
    }
}

const Marius = new person(78, 1.69)
const Nina = new person(92, 1.95)

console.log(Mark.BMI());
console.log(Mark.BMI());
