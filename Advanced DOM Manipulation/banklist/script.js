'use strict'

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// TODO: add movementsDates array

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let sorted = false;
let currentAccount;
let timer;

const formatMovementDate = function(date, locale) { 
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // day/ moth/ year

  if(daysPassed === 0) return 'Today';
  if(daysPassed === 1) return 'Yesterday';
  if(daysPassed <= 7) return `${daysPassed} days ago`;
  return new Intl.DateTimeFormat(locale).format(date);
}

const formatCur = function(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(value);
}

const calcDisplayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = ''; 

  // am folosit metoda slice doar pentru a face o copie simpla a array-ului
  const sortedMovements = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
  console.log(sortedMovements);

  // movs = sortedMovements
  sortedMovements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>`;

  // <div class="movements__value">${mov.toFixed(2)} Euro</div>

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

// calcDisplayMovements(account1.movements);
const createUsernames = function (accounts) {
  // nu uita ca map de fapt returneaza, adica return name[0]
  accounts.forEach(function (account) {
    // aici am creat account.username
    account.username = account.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  })
};
createUsernames(accounts);
console.log(accounts);

const calcDisplayBalance = function (account) {
  // aici am creat account.balance
  account.balance = account.movements
    .reduce((accumulator, mov) => accumulator + mov, 0);

  const formattedMov = formatCur(acc.balance, acc.locale, acc.currency);
    
  // labelBalance.innerHTML = `${account.balance.toFixed(2)} EUR`;
  labelBalance.innerHTML = `${formattedMov}`;
}


const calcDisplaySummary = function (account) {
  const formattedMov = formatCur(interest, acc.locale, acc.currency);
    
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formattedMov}`;

  const out = account.movements

    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formattedMov}`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${formattedMov}`;
}

// calcDisplaySummary(account1.movements);
const updateUI = function (account) {
  // display movements
  calcDisplayMovements(account);
  // display balance
  calcDisplayBalance(account);
  // display summary
  calcDisplaySummary(account);
};

const startLogOutTimer = function() {
  const tick =  function() {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = time % 60;
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}: ${sec}`;
    // When 0 seconds, stop timer log out user
    if(time === 0) {
      clearInterval(timer);
      labelWelcome = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    // decrese 1s
    time--;
  }

  //set time to 5 minutes
  let time = 120;
  // Call the timer every second
  tick()
  const timer = setInterval(time, 1000)
  return timer;
}

// Event handler

// // Fake always logged in
// currentAccount =  account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;


// cand avem un button in form element, the default behavior este ca sa faca reload la pagina
// si cand facem click la un input intr-un form , face trigger la functia ce click
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  console.log('Login');

  currentAccount = accounts
    .find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if (currentAccount?.pin === +(inputLoginPin.value)) {
    console.log('Login');
    // display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // create current date 
    const now = new Date();
    const options = {
      hour : 'numeric',
      minute: 'numeric',
      day: 'numeric',
      year: 'numeric',
      weekday: 'short',
    };
    const locale = navigator.language;
    // 'en-US' iso languade code tale -> lingoes.net (coduri pentru diferite tari)
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

    // // day/ moth/ year
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`


    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // timer
    if(timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  } 
})


btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  console.log(amount, receiverAcc);
  if (amount > 0 && currentAccount.balance >= amount && receiverAcc && receiverAcc?.username !== currentAccount.username) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    if(timer) clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  // Daca exista cel putin 1 deposit, iar suma din depozit este cel putin 10% din imprumut
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout( 
      function() {// Add movement
        currentAccount.movements.push(amount);

        // Add loan date
        currentAccount.movementsDates.push(new Date().toISOString());

        // Update UI
        updateUI(currentAccount);

        // Reset timer
        if(timer) clearInterval(timer);
        timer = startLogOutTimer();
      }, 2500);
  }

  inputLoanAmount.value = '';
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && +(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(account => account.username === currentAccount.username);
    console.log(index);
    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
})

const accountMovements = accounts.map(acc => acc.movements);
const allMovements = accountMovements.flat();
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

// varianta scurta
const accountMovements2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
console.log(accountMovements2);

// FLATMAP
const accountMovements3 = accounts
  // cand ai nevoie si de map apoi de fat ca si metoda le poti folosi pe amindoua impreuna
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);


btnSort.addEventListener('click', function (e) {
  console.log('this is the function');
  e.preventDefault();
  calcDisplayMovements(currentAccount, !sorted);
  sorted = !sorted;
})

// exerciti - de aici incep exemplete
// Daca vrem sa folosim metode pe un querySelectAll node care nu este un array adevarat 

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    mov => +(mov.textContent.replace('Euro', ''))
  );

  // al doilea mod in care puteam face asta
  // const movementsUI2 = [...document.querySelectorAll('.movements__value')]
  // si apoi map pentru acest array 
})

const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;
console.log(numDeposits1000);

const numDeposits1000Two = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);


const {deposits, withdrawals} = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums, cur) => {
    // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
    // or
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sums;
  }, { deposits: 0, withdrawals: 0 })
  
  console.log(deposits, withdrawals);

//TODO: exercise: refa exemplele dse mai sus doar cu Reduce

// This is a nice title => This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase + str.slice(1);

  const expections = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  // TODO: foloseste index ca sa verifici daca capitalize este cunva primul cuvant in propozitie , atunci trebuie sa fie cu litera mare
  const titleCase = title.toLowerCase().split(' ').map(word => expections.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ');
  // cand vrem un array de aceeasi marime ca si originalul folosim map
  // titleCase.map(word =>
  //   word[0]
  //     .toUpperCase() + word
  //     .slice(1))
  // Acest exemplu nu o sa ia in consideratie exceptile

  return capitalize(titleCase);
}

console.log(convertTitleCase('This is a nice title'));
console.log(convertTitleCase('this is a LONG title but not to long'));
console.log(convertTitleCase('this is a LONG title but n ot too long'));
console.log(convertTitleCase('and here is another title win an EXAMPLE'));

// aici se termina exercitiu 

// Numbers
// cand avem de facut ceva pentru fiecare al doilea, al treilea rand , etc
labelBalance.addEventListener('click', function() {
  [...document.querySelectorAll('.movements__row')].forEach(function(row, i) {
    //0, 2, 4, 6
    if(i % 2 === 0) row.style.backgroundColor = 'lightblue';
    //0, 3, 6, 9
    if(i % 3 === 0) row.style.backgroundColor = 'lightred';
  
  });
})

























