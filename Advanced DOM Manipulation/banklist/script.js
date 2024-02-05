'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// -------------------------------------------------------------------------------
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // get the coordinated of the element
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);  //y-distance from the top

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // vechea metoda
  // window.scrollTo({
  //   // current position + current scroll
  //   left: s1coords.left + pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  // noua metoda
  section1.scrollIntoView({behavior: 'smooth'})
});

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  // e.target este unde evenimentul prima data sa intamplat ( where the event originated) adica unde click-ul s-a intamplat prima data 
  // e.currentTarget este elementul de care este atasat event handler-ul
  console.log('LINK', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
  console.log(e.currentTarget === this); // true

  // Stop propagation
  // e.stopPropagation(); // in general nu este o ideie prea buna de a folosi oprirea propagarea (NU propaganda!!)
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('CONTAINER', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();

  console.log(e.currentTarget === this); //false
});

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('NAV', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();

  console.log(e.currentTarget === this); //false
});

