/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables
// -> constants, variables, logging, annotations
//const, let
const apples = 65;
//value cant be assigned when declared with const
let books = 5;
books = 25;
//value can be assigned bc of let declaration
console.log(books);

// ~ Types
// -> undefined, null*, boolean, number, string

// ~ Objects
// -> definition, bracket/dot notation, stringify
//an object is a collection of values that represents something
const animal = {
    species: "dog",
    name: "spot",
    age: 4,
    isWellBehaved: true
};
console.log(animal);
console.log(animal.age);
console.log(animal["age"]);
console.log(`${animal.name} is ${animal.age} years old!`); //interpolation
console.log(animal.name + " is " + animal.age + " years old!"); //concentation
console.log(JSON.stringify(animal));

animal.isWellBehaved = false;

// ~ Arrays
// -> definition, access, modification
//an array is a list of ordered values without names
const prices = [43, 56, 32, 23];
console.log(prices[2]);
console.log(JSON.stringify(prices));

prices[0] = 5;

// ~ Conditionals
// if, if-else, if-else-if-else, ternary
const itIsSunny = true;
if (itIsSunny) {
    console.log("wear sunglasses");
} else {
    console.log("stay inside");
};

const action = itIsSunny ? "wear sunglasses" : "stay inside";
console.log(action);

// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions
function sayHello (name, day) {
    console.log("Hi, " + name + "!it's " + day + ".");
};

sayHello("Ariel", "Tuesday");

function square(number) {
    console.log(number * number);
};

const integers = [1, 2, 3, 4];

integers.forEach(square); //named function as a parameter
integers.forEach((number) => {console.log(number * number);}); //anonomys function as a param

// ~ Scope
// -> global, local, closures, function hoisting

const x = 5;

function func() {    //global scope b/c variable was declared globally
    console.log(x);
    const a = 2;
}

function otherFunc() {
    const b = 2;
    function otherOtherFun() {      //local scope b/c func is built inside another func
        console.log(b);
        const c = 3;
    }
}



// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.

const numbers = [1,2,3,4];

function sum (numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
        }
    return total;
}

sum(numbers);




const num = [1,2,3,4];   //   same solution as above but using forEach instead of for Loop
let totall = 0;

num.forEach((sum) => {
    totall += sum;
    return totall;
});

console.log(totall);
    




// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.

const numberz = [1, 2, 3, 4];

function double (numberz) {
    let newArray = [];
    for (let i = 0; i < numberz.length; i++) {
        newArray.push(numberz[i] * 2);
    }
    console.log (newArray);
}

double(numberz);



const numberss = [2, 3, 4];   // same solution as above but using forEach instead of for Loop
let value = 0;

numberss.forEach((number, index) => {
    numberss[index] = number * 2
});

console.log("Original numberss Array", numberss);




// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.

const words = ["ALINA", "JAMAL", "VINH"];

function lowercase(words) {
    const wordsLowerCase = [];
    for (let i = 0; i < words.length; i++) {
        wordsLowerCase.push(words[i].toLowerCase());
    }
    console.log(wordsLowerCase);
};

lowercase(words);




const names = ["ALINA", "JAMAL", "VINH"];

const lowerCase = names.map(e => e.toLowerCase());

console.log(lowerCase);

