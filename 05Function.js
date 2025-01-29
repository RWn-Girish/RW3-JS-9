// Function => perform to specific task

// two var addition

// function addition(){        // function defination / define
//     let a = 10, b = 20;
//     let sum = a + b;
//     console.log("Addition of a and b is: ", sum); 
// }

// addition();     // function calling


// function sayHello(){
//     console.log("Hello, Red & White");
// };

// sayHello()


// Four ways of Functions

// 1. No Argument No Return


function product1(){
    let m = 11,n = 12;
    console.log("Product of m and n is: ", m*n);
}

// product();


// 2. No Argument With Return

function product2(){
    let m = 11,n = 12, total;
    total = m*n;
    return total;
}

// let a = product();
// console.log(a)
// console.log(product())


// 3. With Argument No Return


// function square(a){
//     console.log(a*a)
// }
// function square(a,b){
//     console.log(a+b)
// }
// square(10)
// square(15, 12)

// 4. With Argument With Return

function addition(m,n){
    console.log(typeof n)
    return m + n;
}

// console.log(addition("11","30"))


let choice = 2;
switch(choice){
    case 1:
        product1()
        break;
    case 2:
        console.log(product2())
        break;
    default:
        console.log("Invalid Choice");
        break
}