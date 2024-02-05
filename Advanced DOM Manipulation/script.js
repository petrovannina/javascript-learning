'use strict'

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('header');  // returns the first element that return 
document.querySelectorAll('header');  //return ALL the element that return

document.getElementById('#first-id');  //return the element that has this id

document.getElementsByTagName('div');

// HTMLCOLLECTION vs NODE Elements
/*
Node ELements- don't update itselfs when an element is deleted
HTML COLLECTION update's itself when an element is deeted

*/

document.getElementsByClassName('container')


// Creating and inserting elements
// .isertAdjacentHTML

const message = document.createElement('div')
message.classList.add('cookie-message');
message.textContent = "this is my content text in my elemnt";
message.innerHTML = 'this is my content text in my elemnt. <button>this is my button</button>';
header.prepend(message); //as the first child of the element
header.append(message); //as the last child of the element

header.append(message.cloneNode(true)); //daca vrem sa avem doua elemente ii facem clona

// header.before(message);  // before header
// header.after(message);  // after the header

// message.remove();  // removes the element from DOM


// Lectia 188

// Style
message.style.backgroundColor = 'red';
message.style.width = '120%';

console.log(message.style.height);  //it works just for background colors
console.log(message.style.backgroundColor); //it works here becouse it was set in 45 line as a inline style

console.log(getComputedStyle(message));

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
document.documentElement.style.setProperty('--color-primary', 'orangered')   //we use this with custom properties

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
// dosen't work with custom propertys
// console.log(logo.design); //dosen't work becouse this is not a property that usually an imagi has

logo.alt = 'Beatiful minimalist logo';
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Nina-company');

logo.src;
logo.getAttribute('src')

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes methods
// .add() remove() toggle() .containes()

// Lectia 190

const alertH1 = function (e) {
  alert('addEventLister: Great! You are reading the header');
};

const h1 = document.querySelector('h1');
// old way
// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventLister: Great! You are reading the header')
// })

// new way
// h1.onmouseenter = function (e) {
//    alert('onmouseenter: Great! You are reading the heading :D')
//  }

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 300);

// Lectia 192



