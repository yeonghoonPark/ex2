'use strict';

/*
* class
* - template (틀)
* - declare once
* - no data in
*/

/*
* object
* - instance of a class
* - created many times
* - data in
*/

/*
* object-oriented programming
* class: template
* object: instance of a class
* javaScript classes
* - introduced in ES6
* - syntactical sugar over prototype-based inheritance
*/

/*
* 1. class declarations
*/
class Person {
    // constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const gildong = new Person('gildong', 25);
console.log(gildong);
gildong.speak();

/*
* 2. getter and setters
*/
class User {
    // constructor
    constructor(firstName, lastName, age) {
        // fields
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }


    // getter, setters
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            return (
                console.log('\'age\' can not be negative')
            )
        }
    }
}

const saddo = new User('변', '사또', -1);
console.log(saddo.age);

/*
* 3. fields (public, private)
* - Too soon! (매우 최근에 업데이트 됨)
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
*/
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // class 외부에서는 출력할 수 없다.


/*
* 4. static properties and methods
* - Too soon
*/
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // object와 상관없이 class의 값이기 때문에 undefined로 나온다.
console.log(Article.publisher); // class의 고유의 값이기 때문에 class의 publisher를 넣은 것.

/*
* ★ 5. inheritance (상속), 그리고 다양성
* - a way for one class to extend another class
*/
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    // methods
    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
    // Shape의 method를 가져와서 필요한 부분만 수정할 수 있다.
    // 이것을 overriding 이라 한다.
    getArea() {
        return (this.width * this.height) / 2;
    }

    // Shape의 method를 overriding도 하고 기존의 method를 사용하고 싶다면
    draw() {
        // 기존 Shape의 draw() method
        super.draw();
        // overriding
        console.log('▲');
    }
}
const rectangle = new Rectangle(20, 20, '#f00');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, '#ff0');
triangle.draw();
console.log(triangle.getArea());

/*
* 6. class checking: instanceOf
* - 어떤 object가 어떤 class를 통해서 만들어진게 맞는지 아닌지 true, false로 return한다.
*/
console.log(`1: ${rectangle instanceof Rectangle}`);
console.log(`2: ${triangle instanceof Rectangle}`);
console.log(`3: ${triangle instanceof Triangle}`);
console.log(`4: ${triangle instanceof Shape}`); // Shape를 상속했기 때문에 true
console.log(`5: ${triangle instanceof Object}`); // js에서 모든 object, class들은 js에 있는 Object를 상속 받은 것이다.
