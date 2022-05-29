/*
* use strict
* - added in ES5
* - use this for vanilla jS
*/
'use strict';

/* 
* Function
* - fundamental building block in the program
* - subprogram can be used multiple times
* - performs a task or calculates a value
*/

/*
* 1. Function declaration 
* - function name(param1, param2){ body... return; } 
* - one function === one thing
* - naming: doSomething, command, verb
* - e.g. createCardAndPoint -> createCard, createPoint
* - function is object in jS
*/
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
// jS는 타입을 구분하지 않기에 param으로 온 massage에 string, num 모두 사용할 수 있는 있다.
// 이는 나중에 들어가는 값이 명확하지 않아 코드가 난해해지는 단점이 된다.
log('Hi, ㅎ2');
log(12345);

/* 
* 2. Parameters
* - premitive parameters: passed by value (값이 저장되고 전달)
* - object parameters: passed by reference (레퍼런스(화살표)가 전달?)
*/
function changeName(obj) {
    obj.name = 'coder';
}
const gildong = { name: 'gildong' };
changeName(gildong);
console.log(gildong);

/*
* 3. Default parameters (added in ES6)
*/
function showMessage(message, from = 'unknown') {
    // if (from === undefined) {
    //     from = 'unknown'
    // }
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

/*
* 4. Rest parameters (added in ES6)
*/
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((item) => {
        console.log(item);
    })

    args.map((item, idx) => {
        return (
            console.log(item, idx)
        );
    })
}
printAll('dream', 'coding', 'gildong');

/*
* 5. Local scope
*/
let globalMessage = 'global' // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();

/*
* 6. Return a value
*/
function sum(a, b) {
    return a + b;
}
const result = sum(1, 5);
console.log(`sum: ${sum(1, 5)}`);
console.log(`result: ${result}`);

/*
* 7. Early return, early exit
*/
// bad case
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}
// good case (조건에 맞지 않을 경우 빠르게 return하고 그 뒤에 로직을 실행한다는 개념)
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// -------------------------------------------------------------------- //

/*
* First-class function
* - functions are treated like any other variable
* - can be assigned as a value to variable
* - can be passed as an argument to other functions
* - can be returned by another function
*/

/*
* 1. Function expression
* - a function declaration can be called earlier than it is defined. (hoisted)
* - a function expression is created when the execution reaches it.
*/
// declaration(선언)은 js엔진이 함수나 변수를 선언한 것을 hoistion후에 코드를 실행하기 때문에 error가 없다.
// expression(변수에 저장)은 문서상 변수에 저장 후에 사용가능, 저장 전에는 사용이 불가능하다.
// print(); <- 저장 전이라 error
const print = (message = 'H2') => { // anonymous function (익명함수)
    console.log(message);
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 5));

/*
* 2. Callback function using function expression
*/
// 어느 조건에 맞으면 함수를 부르는 것, callback function
function randomQuize(answer, printYes, printNo) {
    if (answer === 'love u') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = () => {
    console.log('yes!');
}
const printNo = () => {
    console.log('no!');
}
randomQuize('love u', printYes, printNo);
randomQuize('wrong', printYes, printNo);

/*
* Arrow function
* - always anonymous
*/
const simplePrint1 = function () {
    console.log('simplePrint1');
}
simplePrint1();

const simplePrint2 = () => {
    console.log('simplePrint2');
}
simplePrint2();

/*
* IIFE : Immediately Invoked Function Expression
*/
// 함수를 선언함과 동시에 함수를 ()로 묶어주고 뒤에 함수처럼 ()를 붙여주면 선언과 동시에 바로 실행한다.
(function hello() {
    console.log('IIFE');
})();

// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder


function calculate(command, a, b) {
    console.log(command, a, b);
}





