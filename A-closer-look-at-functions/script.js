'use stricte'

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