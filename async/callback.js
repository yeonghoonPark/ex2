'use strict';

// javaScript is synchronous, (동기적, 순차적으로 실행)
// excute the code block by orger after hoisting.
// hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('callback'), 1000); // 비동기적(언제 실행될 지 알 수 없는) 실행
console.log('2');
console.log('3');

// Callback도 2가지의 경우로 나눠진다.
// synchronous callback (동기적 콜백)
function printImmediately(print) {
    print();
}
printImmediately(()=> console.log('hello'));

// asynchronous callback (비동기적 콜백)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// callback hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'gildong' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id); 
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user==='gildon') {
             onSuccess({name: 'gildong', role: 'admin'})
            } else {
                onError(new Error('no access'));
            }
        }, 1000)
    }
}

const userStorage = new UserStorage();
const id = prompt('enter u\'r id');
const password = prompt('enter u\'r password');
userStorage.loginUser(
    id,
    password,
    (user) => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, u have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);



