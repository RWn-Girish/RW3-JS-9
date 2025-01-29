// JSON => JavaScript Object Notation

// let obj = {
//     name: "John Peter",
//     email: "john@test.in",
//     age: 25
// }

// let jsonObj = {
//     "name": "John Peter",
//     "email": "john@test.in",
//     "age": 25
// }

// console.log(obj);

// js => JSON

// let jsonObj = JSON.stringify(obj)
// console.log(jsonObj);


// let person = '{"name": "Jolly Peter", "age" : 30, "hobbies": ["Cricket", "Music"]}'
// // JSON => JS
// let obj = JSON.parse(person);

// console.log(person);
// console.log(obj);


// localSotrage

// localStorage.setItem("Henil", "Today i am bored....");

// let obj = [{
//     title: "Gita",
//     category: "Holybook",
//     pages: 700,
// }]
// localStorage.setItem("Book", JSON.stringify(obj) )

let data = JSON.parse(localStorage.getItem('Book'))
console.log(data);
document.querySelector('h3').innerHTML = data[0].title