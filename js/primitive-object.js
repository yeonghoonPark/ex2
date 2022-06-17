'use strict';

// number, string, boolean, null, undefined

// 변수를 선언하면 메모리에 변수를 담기 위한 공간이 생긴다.
// 그리고 그에 할당되는 값이 그 공간에 들어간다.
// 아래의 예에서는 number라는 변수를 선언함에 메모리에 number를 위한 공간이 생기고,
// 그 공간에는 할당 된 2라는 값이 들어간다.
let number = 2;

// number2라는 변수를 선언함에 메모리에는 number2라는 공간이 생기고,
// 그 공간에는 할당 된 number라는 값이 들어간다.
// number는 이미 변수로 선언되어 있기 때문에 number2에는 number에 할당 된 2라는 값이
// 복사되어 들어간다.
let number2 = number;

console.log(number);
console.log(number2);

// 이미 선언된 number2를 3으로 업데이트 한 경우
// number2의 공간은 이미 생성되어 있고, 그에 할당 되었던 number2의 값이 3으로 변한다.
// number2의 값은 number의 값을 복사해서 할당했기 때문에 number2의 값이 업데이트 되어도
// number의 값에는 영향을 미치지 않는다.
number2= 3;
console.log(number2);
console.log(number);

// 반대로 number를 5로 업데이트 한 경우
// number의 할당 되었던 값은 5로 업데이트 되어 5의 값을 가지게 되고
// number가 2였을 때 복사했던 number2의 값에는 영향을 미치지 않는다.
number = 5;
console.log(number);
console.log(number2);

// object
// object는 키와 밸류로 구성되어있고, object를 선언시에 크기가 커서 메모리에는 각 키를 위한
// 공간이 생성하고, 그 키의 공간에는 키의 밸류가 들어간다.
// 그리고 그 각각의 키와 밸류가 모인 묶음에 위치(주소)를 나타내는 레퍼런스가 생성된다.
// 즉, obj에는 레퍼런스(주소값)만 할당되는 것이고, 키와 밸류는 메모리의 어딘가에 저장되어 있다.
let obj = {
    name : 'gildong',
    age : 25
}

// 예를 들어 obj라는 레퍼런스가 123이라고 가정한다면 아래의 문구는
// 123에서 name이라는 키 값을 가리키는 것이다.
obj.name
console.log(obj.name);

// 아래처럼 선언한다면 메모리는 obj2를 위한 공간을 생성하고 obj2는 object이기 때문에
// 그 공간에는 123이라는 레퍼런스가 복사되어서 들어간다.
let obj2 = obj;
console.log(obj2.name);

// object는 primitive타입과는 다르게 복사시에 그 값이 복사되는 것이 아니라
// 레퍼런스만 복사되어 오게된다.
obj2.name = '춘향';
console.log(obj.name);
// 이처럼 할당 된 키와 밸류가 복사되는 것이 아니라 레퍼런스만 끌어오는 것이기 때문에
// obj2의 name이라는 키의 밸류가 '춘향'으로 변한다면 obj의 name도 '춘향'으로 업데이트 된다.
// 레퍼런스만 복사되고 메모리에 할당 된 근본 값이 변하기 때문..근본 값이 변한 상태에서
// 레퍼런스(화살표)는 동일한 곳을 가르키고 있기 때문에 근본 값이 변한 곳을 obj와 obj2의 레퍼런스가
// 가르키는 곳은 동일하다. 

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
    age: 40
}
// const로 선언했는데 어떻게 밸류값의 변경이 가능한가..
// 레퍼런스는 변경할 수 없지만 그 레퍼런스가 가르키는 안의 값을 바꾸는 개념
// 이유는 object는 레퍼런스가 할당되고 그에 해당하는 값들은 메모리 어딘가에 저장되어있다.
obj3.name = '변';
console.log(obj3.name);
// 즉 화살표는 그대로고(변경불가) 화살표가 가르키는 곳의 값을 바꾸는 것.
