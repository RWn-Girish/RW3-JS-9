// let Hello = require("./hello.js");

// Hello.Addition(145,36)
// Hello.Addition(11,33)


// let { test } = require("./hello");

// console.log(test(15,6))


// Speard Operator (...) => Array, String, Object
// Rest Parameter (...) function

let arr = [ 11,22,33];
// let data = [44,55,66,...arr];


// let arr1 = [ 11,22,33];
// let arr2 = [44,55,66];
// let data = [...arr1,"Hello Wolrd", ...arr2] 
// console.log(data);


let person = {
    Name: "John Peter",
    age: 25,
    email: "john@test.on",
    password: "123345",
    hobbie: [1,2,3,4,5, ...arr]
}

const {Name,age, ...arg} = person;
// console.log(Name)
console.log(arg);
