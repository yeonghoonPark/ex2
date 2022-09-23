// 1. use strict
// added in ES5
// use this for Vanilla javaScript
// use strict를 사용하는 이유, js는 매우 유연한 언어다, 타입을 초월하거나 변수를 선언하지 않고 값을 할당거나 등등..
// 유연함 == 위험, 이는 개발중 많은 실수를 할 수 있다.
// 예를들면 선언되지 않는 변수의 값을 할당하거나 기존에 존재하던 프로토타입을 변경하는 경우를 막아준다
// use strict를 사용하면 조금 더 상식적으로 코딩할 수 있고, js엔진이 조금 더 효율적으로 js를 읽을 수 있다(성능개선).
'use strict';

// use strict가 없다면 가능
// let z;
// z = 0;
// console.log(z);

// 2. variable, rw(read/write)
// let (added in ES6)

{
  let name = 'yeonghoon';
  console.log(name);
  name = 'hello';
  console.log(name);
}

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  age = 4;
}
console.log(age);
age = 4;
var age;
console.log(age);

// 3. constanst, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutabel data types: premitive types, frozen objects (i.e object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.5; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numberic values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greething = 'hello ' + brendan;
console.log(`value: ${greething}, type: ${typeof greething}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const person = { name: 'ellie', age: 20 };
person.age = 21;
console.log(person);

// 5. dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
