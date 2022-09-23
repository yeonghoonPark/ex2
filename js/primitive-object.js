'use strict';

// ptimitive type: number, string, boolean, null, undefined

// 1. 변수선언시 메모리에 변수를 담기 위한 공간이 생성되고, 공간의 이름은 변수명
// 2. 변수의 값이 변수명 공간에 할당
let number = 2;
// number라는 변수를 선언함에 메모리에 number를 위한 공간이 생성되고, number라는 공간에는 2라는 값이 할당된다.

let number2 = number;
// number2라는 변수를 선언함에 메모리에는 number2라는 공간이 생성되고, number2라는 공간에는 number가 복사되어 할당된다.
console.log(number);
console.log(number2);

number2 = 3;
// 이미 선언된 number2를 3으로 변경한 경우
// number2의 공간은 이미 생성되어 있고, number2라는 공간에 할당 되어있던 number2의 값이 3으로 변한다.
// number2의 값은 number의 값을 복사해서 할당 된 값이기에 number2의 값이 변경 되더라도 number의 값에는 영향을 미치지 않는다.
console.log(number2);
console.log(number);

number = 5;
// number를 5로 업데이트 한 경우
// number의 할당 되었던 값은 5로 변경되어 5의 값을 가지게 되고, number가 2였을 때 복사했던 number2의 값에는 영향을 미치지 않는다.
console.log(number);
console.log(number2);

// ----------------------------------------------------------------------------------------------------------------------- //

// object
// object는 key와 value로 구성되어있고, object 선언시 primitive type과는 다르게 reference(주소, 화살표)가 생성된다.
// 메모리 어딘가에 각 key의 공간이 생성되고 value값이 key의 공간에 할당된다.
// 각 key에 할당 된 value값들이 모인 묶인 공간을 reference가 가리킨다.
// 즉, object에는 reference(주소, 화살표)만 할당되는 것이고, key와 그에 할당되는 value는 메모리의 어딘가에 저장된다.
let obj = {
  name: 'gildong',
  age: 25,
};

// 예를 들어 obj선언시 할당 된 reference가 123이라고 가정한다면 123이란 reference는 메모리 어딘가에 저장 된 name이라는 키 값을 가리키는 것이다.
obj.name;
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);
// obj2 = obj라고 한다면 메모리는 obj2를 위한 공간을 생성하고 obj2는 object이기 때문에 그 공간에는 123이라는 reference가 복사되어 할당된다.

// object는 primitive타입과 다르게 복사시에 그 값이 복사되는 것이 아니라 reference가 복사된다.
obj2.name = '춘향';
console.log(obj.name);
// obj2의 name이라는 key의 value가 '춘향'으로 변한다면 obj의 name도 '춘향'으로 변경된다.
// reference만 복사되고 메모리에 할당 된 obj의 값이 변하기 때문이다.

// let은 선언하고 나면 값을 바꿀 수 있다.
let a = 12;
console.log(a);
a = 13;
console.log(a);

// const(상수)는 선언하고 나면 변경이 불가능 하다.
const b = 22;
console.log(b);
// b = 23; (에러)

const obj3 = {
  name: '사또',
  age: 40,
};
// const로 선언했는데 어떻게 value의 변경이 가능한가?
// reference가 변경되는 것이 아니라 reference가 가리키는 곳의 값을 변경하는 개념.
obj3.name = '변';
console.log(obj3.name);
