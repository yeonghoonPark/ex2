'use strict';

// function declaration
let doSomething = (a, b) => {
  console.log('hello', a, b);
};

// function call
doSomething('nice to meet u', "i'm gildong");

// --------------------------------------------

let add = (a, b) => {
  const sum = a + b;
  return sum;
};
// const result = add(1, 2);
// console.log(result);

let inja = (add) => {
  console.log(add(2, 3));
};
inja(add);

const addFun = add;
console.log(add);
console.log(addFun(3, 4));
