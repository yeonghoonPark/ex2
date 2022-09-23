'use strict';

/*
 * Object
 * - one of the javaScript's data types.
 * - a collection of related data and/or function
 * - nearly all objects in javaScript are instances of object
 * - object = { key : value };
 */

/*
 * 1. literals and properties
 */
// create object
let obj1 = {
  // 'object literal' syntax
  name: 'obj1',
  age: 25,
};
let obj2 = new Object({ // 'object constructor' syntax
  name: 'obj2',
  age: 25,
});
console.log(obj1);
console.log(obj2);

// if it is not an object, two parameters are required
const name = 'gildong';
const age = 4;
print1(name, age);
function print1(name, age) {
  console.log(name, age);
}

// an object needs only one parameters
const gildong = {
  name: 'gildong',
  age: 30,
};
print2(gildong);
function print2(person) {
  console.log(person.name, person.age);
}

// 키와 값을 추가할 수 있다.
gildong.hasJob = 'coder';
console.log(gildong.hasJob);

// 키와 값을 삭제할 수 있다.
delete gildong.hasJob;
console.log(gildong.hasJob);

/*
 * 2. computed properties (계산 된 프로퍼티스)
 * - key should be always string type (키는 항상 문자형식으로 전달되어야 한다.)
 */
// .(dot)을 이용해서 키를 불러올 수 있다, .은 코딩하는 순간 그에 해당하는 키를 받아오고 싶을 때 사용
console.log(gildong.name);
// [](브라켓)을 이용해서 키를 불러올 수 있다, [](브라켓)은 정확히 어떤 키가 필요한지 모를 때 사용, 즉 런타임에서 결정될 때
console.log(gildong['name']);
gildong['hasJob'] = 'developer';
console.log(gildong.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(gildong, 'name');
printValue(gildong, 'age');

/*
 * 3. property value shorthand
 */
// 객체를 만들 때 번거로움을 덜기 위해 함수로 만들어 사용할 수 있다.
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('gildong', 10);
console.log(person4);

function makePerson(name, age) {
  return {
    // 여기서 키와 밸류가 이름이 동일하다면 name, age로 생략해서 사용할 수 있다.
    name: name,
    age: age,
  };
}

// object에서 같은 값은 키값의 반복이 된다면 class로도 만들 수 있다.
// class는 hoisting이 되지 않아, 선언하고 뒤에 사용한다.
class MakePersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person5 = new MakePersonClass('saddo', 40);
console.log(person5);

// 위 class 방식을 함수형식으로도 만들 수 있다. ↓
/*
 * 4. constructor function
 * - class와 다르게 function이므로 hoisting이 되기 때문에 선언 뒤든 앞이든 모두 사용할 수 있다.
 */
const person6 = new MakePersonClassFunction('chunhyang', 10);
console.log(person6);

function MakePersonClassFunction(name, age) {
  // this = {}; 생략
  this.name = name;
  this.age = age;
  // return this; 생략
}

/*
 * 5. in operator: property existence check (key in obj)
 */
console.log('name' in gildong);
console.log(['name'] in gildong);
console.log('age' in gildong);
console.log(['age'] in gildong);
console.log('random' in gildong);
console.log(gildong.random);

/*
 * ★ 6. for..in vs for..of
 */
// - for (key in obj)
let key;
for (key in gildong) {
  console.log(key);
}

// - for (value of iterable)
let value;
const array = [1, 2, 3, 4];
for (value of array) {
  console.log(value);
}

/*
 * 7. cloning
 */
// object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'gildong', age: 20 };
const user2 = user;
user2.name = 'coder';
console.log(user);
const user3 = [{ ...user }];
console.log(user3);
user3.name = 'saddo';
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);
