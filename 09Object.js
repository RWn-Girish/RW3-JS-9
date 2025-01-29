// Object => properties (key : value) & methods


// let person  = {
//     name: "John",
//     age: 26,
//     email: "john@test.in",
//     contactno: 1234567890,
    // indian: true,
    // sayHello: function () {
    //     return ('Welcome to 2025!!!!!!')
    // }
// };
// console.log(person);

// person.name = "Jolly";
// person.nationality = "Indian"
// delete person.age
// console.log(person);
// console.log(typeof person);

// 1. dot notation
// console.log(person.name)
// console.log(person.age)
// console.log(person.sayHello())

// 2. bracket ["key"] notation
// console.log(person["age"])
// console.log(person["sayHello"]())


// Object method

// console.log(person.hasOwnProperty("hobby"))
// console.log(Object.keys(person))
// console.log(Object.values(person))


// Object =>  Array & Object

// let person = {
//     name: "John Peter",
//     age: 26,
//     gender: "Male",
//     hobbies: ['Reading', 'music', 'adventure'],
//     address: {
//         line1: "Royal Arcade",
//         line2: "Sarthana jakatnaka",
//         city: "Surat",
//         pincode: 395006
//     }
// }

// for(let i in person){
//     console.log(`${i} => ${person[i]}`);
// }






// console.log(person);
// console.log(person.address.city);

// console.log(person.hobbies[1]);

// console.log(person["hobbies"][0]);
// console.log(person["address"]["line2"]);


// for in (object / array) , for of (array)


// for(let i in person){
//     console.log(i, person[i])
// }

// let data = [11,22,33,44,55];
// for(let i in data){
//     console.log(i, data[i])
// }

// for(let i of data){
//     // if(i == 33){
//     //     continue;
//     // }
//     console.log(i)
// }



// Array of Object

// let students = [
//     {
//         id: 1,
//         name: "Vivek"
//     },
//     {
//         id: 2,
//         name: "Yogesh"
//     },
//     {
//         id: 3,
//         name: "Henil"
//     },
//     {
//         id: 4,
//         name: "Jenish"
//     },
//     {
//         id: 5,
//         name: "Vishal"
//     },
//     {
//         id: 6,
//         name: "Poshika"
//     },
// ]

// for(let i = 0; i<students.length; i++){
//     console.log(students[i].id, students[i].name);
// }


// students.forEach((student)=> {
//     console.log(student.name)
// })


let qoutes = [
    {
        id: 1,
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
        profession: "Irish poet",
        image: 'https://picsum.photos/id/237/200/300',
        topics: [
            "Inspirational",
            "Advice",
            "Humor"
        ]
    },
    {
        id: 2,
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        image: 'https://picsum.photos/id/238/200/300',
        "topics": [
            "Philosophy",
            "Humor"
        ]
    },
    {
        id: 3,
        "quote": "True friends stab you in the front.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "People"
        ]
    },
    {
        id: 4,
        "quote": "Women are made to be Loved, not understood.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "Humor"
        ]
    },
    {
        id: 5,
        "quote": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Philosophy",
            "Advice"
        ]
    },
    {
        id: 6,
        "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        id: 7,
        "quote": "No one can make you feel inferior without your consent.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom"
        ]
    },
    {
        id: 8,
        "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "People"
        ]
    },
    {
        id: 9,
        "quote": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "Advice"
        ]
    },
    {
        id: 10,
        "quote": "Do one thing every day that scares you.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "Life"
        ]
    },
]


// qoutes.forEach((quote) => {
//     console.log(quote)
// })

function generateQoutes(){
    let renadomNum = Math.floor(Math.random() *10)
    // console.log(renadomNum);
    console.log(qoutes[renadomNum]);

    document.getElementById("quoteTitle").innerHTML = `"${qoutes[renadomNum].quote}"`
    document.getElementById("author").innerHTML = `- ${qoutes[renadomNum].author}`
    document.getElementById("profession").innerHTML = `Profession - ${qoutes[renadomNum].profession}`

    // qoutes[renadomNum].topics.forEach((topic)=> {
    //     document.getElementById("topics").innerHTML = `topic - ${topic}`
    // })
    
}

let index = 0;

function prevQoutes(){
    index =(index == 0) ? (qoutes.length-1) : ((index - 1) % qoutes.length);
    loadData(index);
    
}
function nextQoutes(){
    index = (index + 1) % qoutes.length;
    loadData(index);
}


function loadData(id){
    console.log(qoutes[id]);

    document.getElementById("quoteTitle").innerHTML = `"${qoutes[id].quote}"`
    document.getElementById("author").innerHTML = `- ${qoutes[id].author}`
    document.getElementById("profession").innerHTML = `Profession - ${qoutes[id].profession}`
    document.getElementById("images").setAttribute('src', qoutes[id].image)
}

loadData(index);