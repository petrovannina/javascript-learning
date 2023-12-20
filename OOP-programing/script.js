'use strict'

// constructor function
const Person = function (firstName, birthYear) {
    // daca nu specificam proprietatile mai jos, this va fi un obiect gol
    // console.log(this);
    // aicea se creaza viitare proprietati ale obiectului 
    // ar trebui ca si buna practica sa aiba acelasi nume : proprietatea ca si argumentul 
    // eu le-am denumit diferit doar ca sa intelegem care este asignat cui 
    // dar a le denumi exact la fel este o conventie si o practica buna in javascript
    // Instance properties
    this.name = firstName;
    this.year = birthYear;

    // !!!NEVER create a method inside a constructor function
    // daca am crea mii de persoane din cronstructor function-ul asta , asta inseamna ca fiecare obiect creat ar 'duce' aceasta functie cu el
    // adica pe scurt am avea acest cod duplicat de mii de ori 
    // deci daca am avea 1000 de obiecte am avea 1000 de copii ai acestei functii
    // si asta ar fi teribil din punct-ul de vedere al performantei codului nostru 
    // this.calcAge = function () {
    //     console.log(2023 - this.birthYear);
    // }
}

const nina = new Person('Nina', 1994);
console.log(nina)

// 1. New  {} empty object is created
// 2. function is called
//    in this new functhion the 'this' will be set to this newly created object, this = {}
// 3. {} emply object is linked to a prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = "jay";

console.log(nina instanceof Person);
console.log(jay instanceof Person);

//-----------------------------------------------------------------------------------------
// Prototypes

// Person.prototype
// console.log(Person.prototype);
// this is the prototype of constructer
// aici am setat o metoda pentru prototype
Person.prototype.calcAge = function () {
    // console.log(this.birthYear);
    console.log(2023 - this.year);
}


nina.calcAge();
matilda.calcAge();
jack.calcAge();

// this the prototype of jonas, not a prototype property just a prototype
// __proto__ is a property
console.log(nina.__proto__);
console.log(nina.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(nina));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo sapiens";

console.log(nina, matilda);

// ---------------------------------------------------------------------------------------------------------------

console.log(nina.__proto__.__proto__.__proto__);
//.dir displays an interactive list of the properties of the specified JavaScript object
console.dir(Person.prototype.constructor);

// fie ca scriem una sau alta in spate e acelasi lucru 
const arr = [5, 6, 8,8,8, 5,6,9, 9, 10]; // new Array === []
// Array is the constructor function that holds this linked prototype?
// arr__proto__ linkes to the same propotype from the Array constructor function
console.log(arr.__proto__ === Array.prototype);
// prototype inheritance este un mecanism pentru reutilizarea codului
// toate build in methods trebuie sa existe o singura data , putand fi folosite fara a se duplica codul pentru fiecare obiect in sine
console.log(arr.__proto__.__proto__);
// daca vrem sa creem o metoda custom care va putea fi folosita de toate array-rile care le vom crea in viitor
// spre exemplu mai jos avem o metoda care va returna valorile care nu se repeta a unui array
// asta totusi ar trebui sa fie o practica doar pentru proiectele mici personale
// NU FACEM ASTA IN PROIECTE MARI DEOARECE:
// 1.Versiunile viitoare de javascript s-ar putea sa auge aceeasi metoda care sa faca altceva si va strica codul
// 2.mai multi developeri s-ar putea sa implementeze aceeasi metoda cu nume diferite care sa creeze atitea bug-uri incat sa nu merite efortul
Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(h1);
// ---------------------------------------------------------------------------------------------------------------------------------
// Challenge #1

const car = function (speed) {
    this.speed = speed    
}

car.prototype.accelerate = function () {
    this.speed += 10
}

car.prototype.brake = function () {
    this.speed -= 5
}

const BMW = new car(120);
const Mercedes = new car(95);
BMW.accelerate();
BMW.brake();
Mercedes.accelerate();
Mercedes.brake();
// console.log(BMW.brake());
// console.log(Mercedes.accelerate());
// ---------------------------------------------------------------------------------------------------------------------------------------
// class expresion
// const PersonTn = class {

// }

// class declaresion
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    } 

    // instance methods 
    // aceste metode vor fi declarate pe propotipul obiectului, nu pe obiect-ul in sine ( obiectul creat cu new)
    // Metodele vor fi adaugate la .prototype property
    calcAge() {
        console.log(2023 - this.birthYear);
    }

    // ASTA : ESTE LA FEL CU ------- AICI!!!
    greet() {
        console.log(`Hey ${this.firstName}`);
    }
    // data properties
    get age() {
        return 2023 - this.birthYear;
    }
    // data property
    // sa fim atenti cand vrem sa setam o proprietate care deja exista
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert('It"s not the full name');
    }
    // data property
    get fullName() {
        return this._fullName;
    }

    // pentru a crea o metoda statica direct in constructor
    // metodele statice nu se mostenesc pentru ca nu o sa faca parte din prototype-ul obiectului
    static hey() {
        console.log("Hey there !!");
    }
}

// ASTA!! CU ASTA E LA FEL !!!------AICI!!!!
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

const tina = new PersonCl('Tina Iachim', 1996);
console.log(tina);
tina.calcAge();
console.log(tina.age);

// 1. Classes are NOT hoisting
// 2. Class are first-class citizes ( this is becouse classes are a realy special kind of functions behind the scenes)
// 3.Body of a class are executed in a strict mode
// 4.constructer models are not old or depricated(bad) syntax

// -----------------------------------------------------------------------------------------------------------------------------------------------
const account = {
    owner: 'jonas',
    movements: [200, 530, 120, 300],
    // aceste metode vor fi setate in prototype-ul obiectului , ca si oricere alta metoda care se defineste
    // get and set are assessor properties
    // get is a function that gets a  value
    get latest() {
        return this.movements.slice(-1).pop();
    },
    // set is a function that sets a value
    // any set has to have exactly one parameter
    set latest(mov) {
        this.movements.push(mov);
    }
}

console.log(account.latest);
// si o putem seta aici ca si oricare alta proprietate , chiar daca o setam ca si o metoda
account.latest = 50;
console.log(account.movements);

// -----------------------------------------------------------------------------------------------------------------------------------------------
// .from() converteste orice structura care are 'stuctura' asemanatoare unui array intr-un array adevarat
// si este o metoda atasata la Array constructor si nu de prototype property al constructorului , de asta nu poate fi folosit direct pe un [a,b,b]
// Array.from(document.querySelectorAll('h1'))
// dar nu poate fi folosit asa:
// [1,2,3].from()
// pentru ca acest array nu are Array constructor

// asta este un exemplu de static method
// dar asta nu se mosteneste pentru restul obiectelor create , pentru ca pur si simplu nu este in prototipul lui jonas object
// care e diferenta dintre asta si metodele care le faceam mai sus direct pe prototype sau chiar consructor?? ( vezi mai sus)
// LINIA1
// Person.hey = function () {
//     console.log('Hey there !!');
//     // se refera la toata functia de constructor in sine
//     // console.log(this);
// }

// Person.hey()
// nina.hey() //eroare pentru ca nu va fi mostenita , pentru ca nu face parte din prototype

// dar in acest caz this keyword o sa arate catre intreaga clasa , si asta pentru ca o fost definit in clasa vezi exemplu de mai sus linia 1
PersonCl.hey();
//nina.hey(); //ne va da erroare nina.hey nu este o functie

// -----------------------------------------------------------------------------------------------------------------------------------------
// de fapt aici setam protopilul viitoarelor obiecte care urmeaza sa fie create ?
// raspuns : DA! prototipul obiectelor noastre va avea doar calcAge si urmatrul prototip 
const PersonProto = {
    calcAge() {
        console.log(2023 - this.birthYear);
    },

    // asta e varianta manuala de a initializa obiectul
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

};

// si in aces caz am setat prototipul lui obiectului steven cu person proto object 
// PersonProto vrem sa fie este obiectul care va fi prototip-ul  noului obiect creat
const steven = Object.create(PersonProto);
console.log(steven);
// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calcAge()

// new (operator -- asta este new) -seteaza automat prototipul instantei al constructorului, proprietati proto
// object.create putem seta manual prototipul obiectul cu orice obiect dorim noi

// prin urmare asta va fi true
console.log(steven.__proto__ === PersonProto) //true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

// ----------------------------------------------------------------------------------------------------------------------------------------
// Challenge #2
// Transform the solution 1 using classes

class carSpecifications {
    constructor(marc, speed) {
        this.marc = marc;
        this.speed = speed
    }

    // varianta mea 
    calculateSpeedInMiles() {
        this.speed / 1.6;
    }

    get speedUS() {
        return this.speed /1.6
    }

    set speedUS(speed) {
        this.speed = speed * 1.6
    }
}

const ford = new carSpecifications('Ford', 120);
// de ce daca il chemam afara arata valoarea corecta si daca il punem in console ne da undefined ?
ford.calculateSpeedInMiles();
// console.log(ford.calculateSpeedInMiles());

console.log(ford.speedUS);
// get si set se seteaza ca si o proprietate , restul is metode si le setam cu ()
ford.speedUS = 50;
console.log(ford.speedUS);

// -----------------------------------------------------------------------------------------------------------------------------------------
// Pana acum am invatat :
// 1.Constructor functions
// 2.ES6 classes
// 3.Object.create

// IMPORTANT!! REAL CLASSES do not exist in javascript!

const Human = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Human.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
    // .call o sa cheme functia dar vom putea sa specificam si this keyword
    Human.call(this, firstName, birthYear);
    this.course = course;
}

// student prototype este un obiect care mosteneste de la person.prototype
// !!!IMPORTANT
// trebuie sa creeem legatura asta inainte sa adaugam alte metode in student.prototype si asta din cauza ca objects.create va returna un obiect gol
// altfel object.create va suprasicre de fapt metoda care am creao inainte( daca asa am fi facut) 
// TODO: vezi asta in proiecte cu angular !!! 
Student.prototype = Object.create(Human.prototype)

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student('Mike', 1994, 'Computer Science');
console.log(mike);
mike.introduce();
// asta imi da NaN -- am rezolvat
mike.calcAge();
console.log(mike.__proto__);

console.log(mike instanceof Student); //true
// este adevrat pentru ca am creat acel obiect cu object.create care puncteaza catre person prototype
// fara acea linie de cod era fals
console.log(mike instanceof Person); //true
// si asta e true pentru ca orice clasa mosteneste prima data prototype-ul lui Object!!
console.log(mike instanceof Object); //true

Student.prototype.constructor = Student;
// fara linia de mai sus ar puncta catre Person 
// si sunt ocazii in care e necesar sa putem sa folosim corect constructorul
console.dir(Student.prototype.constructor);

// ----------------------------------------------------------------------------------------------------------------------------------
// CHALENGE 3

const autovehicule = function (marc, speed) {
    this.marc = marc;
    this.speed = speed;
}

autovehicule.prototype.accelerate = function () {
    this.speed += 10;
}

autovehicule.prototype.brake = function () {
  this.speed -= 10;
};

const EV = function (marc, speed, batery) {
    autovehicule.call(this, marc, speed);

    this.batery = batery;
}

EV.prototype = Object.create(autovehicule.prototype);

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.batery --;
}

EV.prototype.chargeBattery =  function () {
    // verifica cata bateria are masina
    // daca bateria e mai mica de 90 , scate 90 - baterie , si apoi adauga valoarea aceeia la aterie
    if (this.batery < 90) {
        const difference = 90 - this.batery;
        this.batery = this.batery + difference;
    }
}


// ---------------------------------------------------------------------------------------------------------------------------------------

class Elev extends PersonCl {
    constructor(fullName, birthYear, course) {
        // asta mereu trebuie sa se intample prima data
        // super() functia aceasta este responsabila pentru crearea cuvantului cheie this
        // si daca nu avem nevoie de this , atunci nu am avea nevoie de loc de super()
        super(fullName, birthYear);
        this.course = course;

    }
}

const marta = new Elev('Marta Huluban', 2020, 'Computer Science')
// -------------------------------------------------------------------------------------------------------------------------------
// asta e varianta care ii place la cel de la care am facut cursul :) 
console.log('ultima');
const PersonProto2 = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven2 = Object.create(PersonProto2);
const StudentProto = Object.create(PersonProto2);
// de ce trebuie sa folosim init in cazul asta ???
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto2.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function () {
    console.log(`Hi , my name is ${this.fullName} and I am a student in ${this.course}`);
}

const jay2 = Object.create(StudentProto);
jay2.init('Jay', 2010, 'Computer Science');
jay2.introduce();
// console.log(jay2);
jay2.calcAge();


// ---------------------------------------------------------------------------------------------------------------------------------------------

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        // prin faptul ca ii adaugam _ o facem privata
        // nu o face cu adevrat privata , este doar o conventie , dar toti developeri o folosesc la fel
        // protected
        this._movements = [];
        // asta ce e ? navigator.language??
        this.locale = navigator.language;

        console.log('Thanks for openning an account');
    }

    // Public interface of our objects
    getMovements() {
        return this._movements;
    }

    deposit(value) {
        this._movements.push(value);
    }

    withdraw(value) {
        this.deposit(-value);
    }

    _aproveLoan(value) {
        return true;
    }

    requestLoan(value) {
        if (this._aproveLoan(value)) {
            this.deposit(value);
            console.log('the Loan was aproved');
        }
    }
}

const acc1 = new Account('Jonas', 'Eur', 1111);
console.log(acc1);

// nu e ok sa interactionam asa cu proprietatile constructorului
// e mult mai ok sa definim metode
// exemplu : inca este accesibila din afara , dar o sa se stie ca sta nu ar trebui modificata si ca ceva nu e ok ( deci colegi nu o sa te vada cu ohci buni daca faci modificari aici)
// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
// astea nu ar trebui sa fie accesibile din exterior 
// ar trebui sa fie private
acc1.requestLoan(1000);
// acc1.aproveLoan(1000)

console.log(acc1);

// ---------------------------------------------------------------------------------------------------------------------------------------
// De ce avem nevoie de Data Encapsulation ?
//1. ca sa prevenim modificarea accidentala din afara a codului din interior
//2. cand expunem doar o bucatica mica de API aducem modificari noi la clasa cu mai mare incredere
// Desi javascript nu suporta inca incapsularea si data privacy adevarata , inca !

// asta ar fi metoda corecta de a folosi movements
console.log(acc1.getMovements());
// --------------------------------------------------------------------------------------------------------------------------------------

// Public fields
// Private fields
// Public methods
// Private methods
// (there is also the static version)

class AccountExample {
  // this is how we define a public field
  locale = navigator.language;

  // Private fileds (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //   protected/private property
    this._pin = pin;
    // prin faptul ca ii adaugam _ o facem privata
    // nu o face cu adevrat privata , este doar o conventie , dar toti developeri o folosesc la fel
    // protected
    this._movements = [];
    // asta ce e ? navigator.language??
    this.locale = navigator.language;

    console.log('Thanks for openning an account');
  }

  // Public interface of our objects (public methods)
  getMovements() {
    return this._movements;
  }

  deposit(value) {
    this._movements.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  requestLoan(value) {
    if (this._aproveLoan(value)) {
      this.deposit(value);
      console.log('the Loan was aproved');
      return this;
    }
  }

  _aproveLoan(value) {
    return true;
  }

  //   // private methods
  //   #aproveLoan(value) {
  //     return true;
  //   }
}

AccountExample.deposit(300).deposit(300).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(AccountExample.getMovements());


// Exercise 

