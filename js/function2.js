'use strict'

// 함수 선언시에도 저장되는 원리는 object와 동일하다.
const add = (a, b)=>{
    return a + b
};
// parameter를 통해 외부에서 값을 받아 올 수 있다.

const sum = add(3, 5);
console.log(sum);
// sum이라는 변수를 선언함으로 메모리에는 sum의 공간이 생성되고, add함수를 통한 값이 sum의 공간에 할당된다.

const doSomething = add;
const result1 = doSomething(2, 5); 
const result2 = add(2, 5);
console.log(result1, result2);
// doSomething는 add라는 함수의 reference를 복사한 것, 즉 동일하다.

const surprise = (operator)=>{
    const result = operator(2, 10); // = add(2, 10)
    console.log(result);
}

surprise(add);
// add가 surprise의 parameter로 operator에 전달된다 = add의 reference가 복사되어 전달된다.

