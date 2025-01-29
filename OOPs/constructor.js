// Constructor => special Method
// Constructor is called automaticlly when object is created. 
// no return type
// 1. Default 2. Parameterized
// Super => 



// class Test {
//     constructor(){
//         console.log('Constructor called...');
//     }

//     display(){
//         console.log('Display method called...');
//     }
// }


// let obj = new Test();
// let p = new Test()

class Hello{
    constructor(name, city="Surat"){
        this.name = name;
        this.city = city;
    }

    showInfo(){
        return `${this.name} is lives in ${this.city}.`
    }
}

let rohit = new Hello("Rohit", "Pune");

let virat = new Hello("Virat", 'Delhi')

console.log(rohit)
console.log(rohit.city)
console.log(rohit.showInfo())