
var num = 10;

var num = 30;

num = 50;
console.log(num);

if (true) {
    var num2 = 40;
    console.log(num2);
}

console.log(num2);


let num3 = 60;
num3 = 70;
// let num3 = 80;
console.log(num3);


if (true) {
    let city = "dhaka";
    console.log(city);
}

//console.log(city);

const pi = 3.1416;
//pi = 4.167;
console.log(pi);

const arr = [10, 20, 40];
arr.push(50);
//arr = [1, 2, 3];
arr.forEach((element) => {
    console.log(element);
});


const obj = {
    name: "mr. meow",
    age: 20
}

obj.city = "dhaka";

// obj = {
//     city="dhaka"
// }

for (let prop in obj) {
    console.log(obj[prop]);
}

var escapeVelocity;

let age = 75;
// if (age <= 50) {
//     console.log("young");
// }
// else if (age <= 80) {
//     console.log("middle aged");
// }
// else {
//     console.log("old");
// }

console.log((age <= 50) ? "young" : (age <= 80) ? "middle aged" : "old");


let testArr = [10, 20, 30, 40, 50, 100];
testArr.forEach((element, index) => {
    console.log(index);
    console.log(element);
})

for (let element of testArr) {
    console.log(element);
}

const student =
{
    id: "23-98998-2",
    name: " Mr. Meow",
    cgpa: 2.5,
    dept: "computer Science"

}

for (let prop in student) {

    console.log(`key : ${prop} , value: ${student[prop]}`);
}


function greet() {
    console.log("hello");
}

greet();

const sayMeow = function () {
    console.log("meow");
}

sayMeow();

const bark = function (sound = "ghew ghew") {
    console.log(sound);
}

bark("moew moew");

const greetStudent = studentname => {
    console.log(`hello ${studentname}`)
}


greetStudent('Alice');

const sum = (a, b = 30) => a + b;

console.log(sum(10, 20));

const arr3 = [10, 20, 30, 40, 60];
arr3.push(100);
arr3.pop();
console.log(arr3);
console.log(arr3.length)

const person =
{
    name: "Mr. Meow",
    gender: "male",
    isBangladeshi: true,
    age: 30,
    address:
    {
        house: 2,
        road: 2,
        zip: "dhaka-1216",
        city: "Dhaka"

    },
    // showDetails() {
    //     console.log(`name: ${this.name}, age: ${this.age}, gender: ${this.gender}, isBangladeshi ${this.isBangladeshi}, address: city:${this.address.city}`)
    // }

    showDetails: function () {
        const details = () => {
            console.log(`name: ${this.name}, age: ${this.age}, gender: ${this.gender}, isBangladeshi ${this.isBangladeshi}`);
        }

        details();
    }
}

//person.address = "dhaka";

console.log(person.name);
console.log(person["gender"]);
console.log(person.address.road);

person.showDetails();

// array destructuring
let arr5 = [100, 200, 300, 400, 500];

const [vl1, , vl3, , vl5] = arr5;

console.log(vl1, vl3, vl5);


//object destructuring
const vehicle = {
    model: "tx-8989",
    brand: "BMW",
    color: "Silver"

}


const { model: models, brand, color } = vehicle;
console.log(models, brand, color);

let testType = { name: "meow" };
console.log(typeof (testType));

console.log("123a" - 123);

//spreadOp

let spArr = [10, 20, 30, 40, 50];
const spreadTest = (a, b, c, d, e) => {
    console.log(a + b + c + d + e);
}

spreadTest(...spArr);

//restOp

const restTest = (a, ...numArr) => {
    console.log(typeof (numArr));
    let result = 0;
    numArr.forEach((element) => {
        result = result + element;
    })

    console.log(result);
}

restTest(10, 20, 30, 40, 50);



const [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a, b, c);

class Human {

    #name;
    constructor(name, gender) {
        this.#name = name;
        this.gender = gender;
    }

    setName(name) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }

    eat() {
        console.log("eating...");
    }

    showDetails() {
        console.log(`name: ${this.#name}, gender: ${this.gender}`);
    }
}

class Teacher extends Human {

    constructor(name, gender, specialization) {
        super(name, gender);
        this.specialization = specialization;
    }

    showDetails() {
        super.showDetails();
        console.log(`specializtion: ${this.specialization}`);
    }

    teach() {
        console.log("teaching");
    }

    add(a, b) {
        console.log("2 param");
    }

    add(a, b, c) {
        console.log("3 param");
    }

    sub() {
        throw new Error("cannot call an abstruct method");


    }



}


const human = new Human("Ms. Human", "Female");
human.setName("meow");
console.log(human.getName());
human.eat();
human.showDetails();
//console.log(human.#name);

const t = new Teacher("Mr. Tom", "Male", "Artifical Intelliogence");
t.showDetails();
t.teach();
t.eat();
t.add(a, b, c);
t.sub();







