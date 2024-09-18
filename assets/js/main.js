"use strict";

// задание 1
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (const key in salaries) {
    sum += salaries[key];
}

console.log(sum);

// задание 2

function multiplyNumeric(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);


// задание 3

let calculator = {
    a: null,
    b: null,

    read: function(){
        this.a = Number(prompt("Введите первое число"));
        this.b = Number(prompt("Введите второе число"));
    },

    sum: function(){
        return this.a + this.b;
    },

    mul: function(){
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


// задание 4

function extractCurrencyValue(str){
    let value = str.split('$')[1];
    return parseInt(value);
}

let currencyValue = extractCurrencyValue("$120");

console.log(currencyValue);


// задание 5
let users2 = [
    { name: 'Вася', age: 25 },
    { name: 'Петя', age: 30 },
    { name: 'Маша', age: 28 }
];

let names = users2.map(function (user) {
    return user.name;
});

alert( names.toString().split(', ') );

// задание 6
function getAverageAge(users) {
    let sum = 0;

    for (const user of users) {
        sum += user.age;
    }

    return sum / users.length;
}

let users = [
    { name: 'Вася', age: 25 },
    { name: 'Петя', age: 30 },
    { name: 'Маша', age: 28 }
];

let averageAge = getAverageAge(users);
console.log(averageAge);