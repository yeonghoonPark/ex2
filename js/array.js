'use strict';

// Array 🍕

// 1. Declaration
const arr1 = new Array(1, 2);
console.log(arr1);
const arr2 = [1, 2];
console.log(arr2);

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // 값이 없으면 undefined
console.log(fruits[fruits.length - 1]);
console.log(`--Dotted line--`);

// 3. Looping over an array
// print all fruits
// 3-1. for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log(`--Dotted line--`);

// 3-2. for of
for (let 값 of fruits) {
  console.log(값);
}
console.log(`--Dotted line--`);

// 3-3. forEach
fruits.forEach((item, index) => {
  console.log(item, index);
});
console.log(`--Dotted line--`);

// 3-4. map
fruits.map((item) => console.log(item));
console.log(`--Dotted line--`);

// 4. addtion, deletion, copy
// push: add an item to the end
fruits.push('🍉', '🍇');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(`--Dotted line--`);

// unshift: add an item to the Beginning
fruits.unshift('🍒', '🍐');
console.log(fruits);

// shite: remove an item to the beginning
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log(`--Dotted line--`);

// ★. note!! shift, unshift are slower than push, pop
// 데이터를 뒤에서 넣고 빼는 것은 기존의 데이터를 그대로 둔 상태에서 넣고 빼기 때문에 빠르다,
// 반대로 데이터를 앞에서 넣고 빼는 것은 기존의 데이터 전체를 수정하는 것이기 때문에 비교적 느리다, 이는 배열이 길면 길수록 느려진다.
// 가능하면 shift와 unshift를 사용하는 것 보다는 posh와 pop을 이용하는 것이 좋다.

// splice: remove an item by index position (지우고 원하는 값을 넣을 수도 있다.)
const testNumber = [1, 2, 3, 4, 5, 6, 7];
console.log(testNumber);
testNumber.splice(1, 3);
console.log(testNumber);
testNumber.splice(0, 1, 3, 4); // (빼고싶은 idx, idx로 부터 얼마까지, 그자리에 넣고 싶은 값)
console.log(testNumber);
console.log(`--Dotted line--`);

// combine two arrays
const testNumber2 = [8, 9, 10, 11];
const newTestNumber = testNumber.concat(testNumber2);
console.log(newTestNumber);
console.log(`--Dotted line--`);

// 5. searching
// indexOf: find the index
console.log(newTestNumber);
console.log(newTestNumber.indexOf(8));
console.log(newTestNumber.indexOf(11));

// includes: 배열에서 그 값이 있는지 없는지 true, false로 확인
console.log(newTestNumber.includes(3));
console.log(newTestNumber.includes(12));

// lastIndexOf
// 배열에서 같은 값이 있을 경우 indexOf는 그 같은 값의 첫번째 index를 찾고,
// lastIndexOf는 같은 값의 마지막 index를 찾는다.
newTestNumber.push(3);
console.log(newTestNumber);
console.log(newTestNumber.indexOf(3));
console.log(newTestNumber.lastIndexOf(3));

// reverse (배열의 순서를 거꾸로)
newTestNumber.reverse();
console.log(newTestNumber);
newTestNumber.reverse();
console.log(newTestNumber);

// slice
let sliceNewTestNumber = newTestNumber.slice(0, 2);
console.log(sliceNewTestNumber);

// sort
newTestNumber.sort();
console.log(newTestNumber);
