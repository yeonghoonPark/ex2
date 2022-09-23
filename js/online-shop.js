'use strict';

let showTshirt = document.querySelector('nav>ul>li:nth-child(1)');
let showPants = document.querySelector('nav>ul>li:nth-child(2)');
let showSkirt = document.querySelector('nav>ul>li:nth-child(3)');
let showBlue = document.querySelector('nav>ul>li:nth-child(4)');
let showYellow = document.querySelector('nav>ul>li:nth-child(5)');
let showPink = document.querySelector('nav>ul>li:nth-child(6)');
let list = document.querySelectorAll('.list>ul>li');
let reFresh = document.querySelector('.logo');

showTshirt.addEventListener('click', () => {
  list[0].style.display = 'block';
  list[1].style.display = 'none';
  list[2].style.display = 'none';
  list[3].style.display = 'block';
  list[4].style.display = 'none';
  list[5].style.display = 'none';
  list[6].style.display = 'block';
  list[7].style.display = 'none';
  list[8].style.display = 'none';
});

showPants.addEventListener('click', () => {
  list[0].style.display = 'none';
  list[1].style.display = 'block';
  list[2].style.display = 'none';
  list[3].style.display = 'none';
  list[4].style.display = 'block';
  list[5].style.display = 'none';
  list[6].style.display = 'none';
  list[7].style.display = 'block';
  list[8].style.display = 'none';
});

showSkirt.addEventListener('click', () => {
  list[0].style.display = 'none';
  list[1].style.display = 'none';
  list[2].style.display = 'block';
  list[3].style.display = 'none';
  list[4].style.display = 'none';
  list[5].style.display = 'block';
  list[6].style.display = 'none';
  list[7].style.display = 'none';
  list[8].style.display = 'block';
});

showBlue.addEventListener('click', () => {
  list[0].style.display = 'block';
  list[1].style.display = 'block';
  list[2].style.display = 'block';
  list[3].style.display = 'none';
  list[4].style.display = 'none';
  list[5].style.display = 'none';
  list[6].style.display = 'none';
  list[7].style.display = 'none';
  list[8].style.display = 'none';
});

showYellow.addEventListener('click', () => {
  list[0].style.display = 'none';
  list[1].style.display = 'none';
  list[2].style.display = 'none';
  list[3].style.display = 'block';
  list[4].style.display = 'block';
  list[5].style.display = 'block';
  list[6].style.display = 'none';
  list[7].style.display = 'none';
  list[8].style.display = 'none';
});

showPink.addEventListener('click', () => {
  list[0].style.display = 'none';
  list[1].style.display = 'none';
  list[2].style.display = 'none';
  list[3].style.display = 'none';
  list[4].style.display = 'none';
  list[5].style.display = 'none';
  list[6].style.display = 'block';
  list[7].style.display = 'block';
  list[8].style.display = 'block';
});

reFresh.addEventListener('click', () => {
  list[0].style.display = 'block';
  list[1].style.display = 'block';
  list[2].style.display = 'block';
  list[3].style.display = 'block';
  list[4].style.display = 'block';
  list[5].style.display = 'block';
  list[6].style.display = 'block';
  list[7].style.display = 'block';
  list[8].style.display = 'block';
});
