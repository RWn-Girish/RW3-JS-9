// Recursion => Function called itself

// function SayHello(n){
//     console.log("Inside Func Called....", n);
//     if(n>0){
//         SayHello(--n);
//     }
// }

// SayHello(5)


// Factorial => 5! => 5*4*3*2*1 => 120
/*
                5! => 5 * 24
                   => 5 * 4!
                          4! => 4 * 6 = 24
                             => 4 * 3!
                                    3! => 3 * 2 = 6
                                       => 3 * 2!
                                              2! => 2 * (1) = 2
                                                 => 2 * 1! => 1


*/
// fibbonaccie series => 1 1 2 3 5 8...
// function fact(n){
//     if(n==1){
//         return 1;
//     }else{
//         return n * fact(n-1)
//     }
// };

// console.log(fact(5))


// Function as a variable (anonymous function)

// let sayHello = function (x,y) {
//      return (`Hello Good Morning, ${x+y}` );
// }

// console.log(sayHello(11,3))


// Arrow Function (anonymous function)


// let hello = (x, y) => x + y

// console.log(hello(10,2))

// IIFE => no return 


//  (()=> {
//    console.log("IIFE Called....")
// })()



// Nested Function (Lexical Scope)
// function Outer(n) {
//    console.log("Outer Function Called...");

//    let Inner = (x,y) => console.log("Inner Function Called...", n);

//    Inner(12,13);
//    // console.log(x, y);
// }


// Outer(11);

// Clouser Concept

function Outer(){
   console.log("Outer Function Called...");

   function Inner() {
      console.log("Inner Function Called...");
   }

   return Inner;
}


Outer()()
// let data = Outer()
// data()
// console.log(data);