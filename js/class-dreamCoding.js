'use strict'

// class는 다양한 object를 만들기 위한 틀(청사진)이다.
// class는 선언시에 첫글자를 대문자로 쓴다.
class Counter {
    // constructor도 함수이다.
    // 매개변수로 오는 것이 존재할 때는 항상 callback해줘야한다, 만약 매개변수를 사용하지 않을 거라면 line19 참조.
    constructor(runFiveTimes) {
        // class를 이용해서 object를 만드는 순간 0으로 초기화 된다.
        this.counter = 0;
        this.callback = runFiveTimes;
    }

    // class내에서 함수를 선언할 때에는 function을 사용하지 않아도 된다.
    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            // typeScript와 다르게 ? 옵션이 없기 때문에 조건을 줘야한다.
            this.callback && this.callback(this.counter);
        }
    }
}

const printSomething = (number) => {
    console.log(`'yo' ${number}`);
}

const alertSomething = (number) => {
    alert(`'yo' ${number}`);
}

const printlCounter = new Counter(printSomething);
const alertlCounter = new Counter(alertSomething);

// 요점, class자체를 하나의 완전체로 만들기 보다는, callback함수를 이용하여 그 상황에 맞게 사용하는게 재사용성이 높다.

class Food {
    constructor(runThreeTimes) {
        this.name = 'apple';
        this.theNumber = 0;
        this.callback = runThreeTimes;
    }

    increase() {
        console.log(this.theNumber++);
        if (this.theNumber % 3 === 0) {
            this.callback(this.theNumber);
        }
    }
}

const threeTimesConsole = () => {
    console.log('3의 배수입니다.');
}

const threeTimesAlert = () => {
    alert('3의 배수입니다.')
}

const consoleFood = new Food(threeTimesConsole);
const alertFood = new Food(threeTimesAlert);

consoleFood.increase();
consoleFood.increase();
consoleFood.increase();
consoleFood.increase();
consoleFood.increase();
consoleFood.increase();