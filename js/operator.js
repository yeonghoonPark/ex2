'use strict';

// 1. string concatenation
console.log('my ' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// single quotation 을 사용할 때는 \를 사용하면 그대로 표기 된다,
// 줄바꿈을 할 때는 \n 을 사용하면 줄이 바뀐다.
// \t 는 tap의 기능
console.log("길동's \n\tbook");

// 2. numeric operators(숫자연산자, 산술연산자)
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. assignment operators
let x = 3;
let y = 6;
console.log((x += y)); // x = x + y;
console.log((x -= y)); // x = x - y;
console.log((x *= y)); // x = x * y;
console.log((x /= y)); // x = x / y;

// 5. comparison operators (비교연산자)
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// ★ 6. logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2; // false

// ||(or), finds the first truthy value
// 조건들 중에서 하나라도 true가 되면 true를 반환.
// 조건들 중에 처음으로 true가 나온 것에 멈추고 반환, 뒤에 다른 true가 있더라도 뒤의 조건들은 실행하지 않는다.
// 조건은 심플한 것부터 앞, 헤비한 함수나 연산이 복잡한 것은 뒤.(효율성)
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value
// 조건들 모두가 true가 되어야 true를 반환한다.
// 조건들 중 처음으로 false가 나온다면 false를 반환, 뒤에 다른 조건들은 실행하지 않는다.
// 조건은 심플한 것부터 앞, 헤비한 함수나 연산이 복잡한 것은 뒤.(효율성)
console.log(`and: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 5; i++) {
    // wasting time
    console.log('😎');
  }
  return 'true입니다.';
}

// !(not)
console.log(`!= ${!value1}`);

// 7. equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// type은 무시하고 값만 본다.
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// type과 값 모두 본다.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
console.log(`------`);

// object equality by reference
const gildong1 = { name: 'gildong' };
const gildong2 = { name: 'gildong' };
const gildong3 = gildong1;
console.log(gildong1 == gildong2);
console.log(gildong1 === gildong2);
console.log(gildong1 === gildong3);
// gildong1과 gildong2는 오브젝트의 값은 같지만 서로 다른 오브젝트이다.
// gildong1과 gildong3은 같은 오브젝트이다.

console.log(`------`);
// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// ★ 8. conditional operators: if
// if, else if, else
const name = 'gildong';
if (name === 'gildong') {
  console.log('Welcome Gildong');
} else if (name === 'coder') {
  console.log('U are amazing coder');
} else {
  console.log('who a u?');
}

// ★ 9. ternary operator: ? (3항연산자)
// condition ? value1 : value2;
// 조건? 값1: 값2;
// 조건이 true면 값1을 실행하고(보여주고) false라면 값2를 실행해라(보여줘라).
console.log(name === 'gildong' ? 'yes' : 'no');

// 10. switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love u!');
    break;
  default:
    console.log('same all!');
    break;
}

// ★ 11. loops (반복문)
// while loop, while the condition is truthy
// body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
// do의 블럭을 실행 한 후에 while의 조건이 맞는지 안맞는지 검사.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (let i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 5; i > 0; i = i - 2) {
  console.log(`inline variable for: ${i}`);
}

// nested loop (중첩반복), cpu에 좋지가 않다, 되도록 피할 것.
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers
// (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. interate from 0 to 10 and print numbers until reaching 8
// (use break)
for (let i = 0; i < 11; i++) {
  if (i == 9) {
    break;
  }
  console.log(`q2. ${i}`);
}

console.log('-----');
let ten = 10;
while (ten <= 20) {
  console.log(`ten: ${ten}`);
  ten++;
}
