'use strict';

// class는 object를 대량으로 만들시에 사용하면 편리하다.

// ----------------------- ES5 class 문법 --------------------------

function Champion근거리(parameter1, parameter2) {
  // this는 Cast라는 class로부터 생성되는 object이다. instance라고 한다.
  this.q = parameter1; // 새로 생성되는 instance에 { q: "parameter1"} 라는 의미
  this.w = parameter2;
}

const nunu = new Champion근거리('consume', 'snowball');
const garen = new Champion근거리('strike', 'courage');

console.log(nunu);
console.log(garen);

// ----------------------- ES6 class 문법 --------------------------

class Champion원거리 {
  constructor(parameter1, parameter2, parameter3, parameter4) {
    (this.q = parameter1),
      (this.w = parameter2),
      (this.e = parameter3),
      (this.r = parameter4);
  }
}

const 케이틀린 = new Champion원거리('총', '덫', '투망', '저격');
const 베인 = new Champion원거리('구르기', '은화살', '선고', '사냥꾼');

console.log(케이틀린);
console.log(베인);

console.log(Champion원거리);

// --------------------------------------------------------------------------

const box = document.querySelector('.box');
console.log(box);

const createLi = document.createElement('li');
console.log(createLi);

const childLi = box.appendChild(createLi);
childLi.innerText = 'Hello World';
