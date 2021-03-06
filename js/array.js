'use strict';

// Array ๐

// 1. Declaration
const arr1 = new Array(1, 2);
console.log(arr1);
const arr2 = [1, 2];
console.log(arr2);

// 2. Index position
const fruits = ['๐', '๐'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // ๊ฐ์ด ์์ผ๋ฉด undefined
console.log(fruits[fruits.length - 1]);
console.log(`--Dotted line--`);

// 3. Looping over an array
// print all fruits
// 3-1. for loop
for (let i = 0; i < fruits.length;i++){
    console.log(fruits[i]);
}
console.log(`--Dotted line--`);

// 3-2. for of
for (let ๊ฐ of fruits) {
    console.log(๊ฐ);
}
console.log(`--Dotted line--`);

// 3-3. forEach
fruits.forEach((item, index) => {
    console.log(item, index);
})
console.log(`--Dotted line--`);

// 3-4. map
fruits.map((item) => console.log(item));
console.log(`--Dotted line--`);

// 4. addtion, deletion, copy
// push: add an item to the end 
fruits.push('๐', '๐');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(`--Dotted line--`);

// unshift: add an item to the Beginning
fruits.unshift('๐', '๐');
console.log(fruits);

// shite: remove an item to the beginning
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log(`--Dotted line--`);

// โ. note!! shift, unshift are slower than push, pop
// ๋ฐ์ดํฐ๋ฅผ ๋ค์์ ๋ฃ๊ณ  ๋นผ๋ ๊ฒ์ ๊ธฐ์กด์ ๋ฐ์ดํฐ๋ฅผ ๊ทธ๋๋ก ๋ ์ํ์์ ๋ฃ๊ณ  ๋นผ๊ธฐ ๋๋ฌธ์ ๋น ๋ฅด๋ค,
// ๋ฐ๋๋ก ๋ฐ์ดํฐ๋ฅผ ์์์ ๋ฃ๊ณ  ๋นผ๋ ๊ฒ์ ๊ธฐ์กด์ ๋ฐ์ดํฐ ์ ์ฒด๋ฅผ ์์ ํ๋ ๊ฒ์ด๊ธฐ ๋๋ฌธ์ ๋น๊ต์  ๋๋ฆฌ๋ค, ์ด๋ ๋ฐฐ์ด์ด ๊ธธ๋ฉด ๊ธธ์๋ก ๋๋ ค์ง๋ค.
// ๊ฐ๋ฅํ๋ฉด shift์ unshift๋ฅผ ์ฌ์ฉํ๋ ๊ฒ ๋ณด๋ค๋ posh์ pop์ ์ด์ฉํ๋ ๊ฒ์ด ์ข๋ค.

// splice: remove an item by index position (์ง์ฐ๊ณ  ์ํ๋ ๊ฐ์ ๋ฃ์ ์๋ ์๋ค.)
const testNumber = [1, 2, 3, 4, 5, 6, 7];
console.log(testNumber);
testNumber.splice(1, 3);
console.log(testNumber);
testNumber.splice(0, 1, 3, 4); // (๋นผ๊ณ ์ถ์ idx, idx๋ก ๋ถํฐ ์ผ๋ง๊น์ง, ๊ทธ์๋ฆฌ์ ๋ฃ๊ณ  ์ถ์ ๊ฐ)
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

// includes: ๋ฐฐ์ด์์ ๊ทธ ๊ฐ์ด ์๋์ง ์๋์ง true, false๋ก ํ์ธ
console.log(newTestNumber.includes(3));
console.log(newTestNumber.includes(12));

// lastIndexOf
// ๋ฐฐ์ด์์ ๊ฐ์ ๊ฐ์ด ์์ ๊ฒฝ์ฐ indexOf๋ ๊ทธ ๊ฐ์ ๊ฐ์ ์ฒซ๋ฒ์งธ index๋ฅผ ์ฐพ๊ณ , 
// lastIndexOf๋ ๊ฐ์ ๊ฐ์ ๋ง์ง๋ง index๋ฅผ ์ฐพ๋๋ค.
newTestNumber.push(3);
console.log(newTestNumber);
console.log(newTestNumber.indexOf(3));
console.log(newTestNumber.lastIndexOf(3));

// reverse (๋ฐฐ์ด์ ์์๋ฅผ ๊ฑฐ๊พธ๋ก)
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


