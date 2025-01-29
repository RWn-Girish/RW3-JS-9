// Conditional Statements => if, if else, nested if else, ladder if else, switch, ternory operator(? :)
// find out maximum number of given two variable
// let x = 920 , y = 420;

// x < y ? console.log("Max Numb is : ", y) : console.log("Maximum Numb is : ", x)
// console.log("Max number is: ", x<y ? y : x);


// if(x < y){
//     console.log("Max num : ", y);
// }else{
//     console.log("Maximum nub: ", x);   
// }


// nested if else -> three var find min numb

// let a = 110, b = 22 ,c = 30;

// if(a < b){
//     if(a < c){
//         console.log(a);
//     }else{
//         console.log(c);
//     }
// }else{
//     if(b < c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
// }

// Change Password Logic

// let cPass= "abc", nPass = "Abc", confPass = "Abc";

// if(cPass == nPass){
//     console.log('Your NewPassword is already used....');
// }else{
//     if(nPass == confPass){
//         console.log("Password changed Success!!!!")
//     }else{
//         console.log("NewPassword & Confirm Password is not Matched");
//     }
// }


/*
    1000 to 5000 => 5%
    5000 to 10000 => 4%
    10000 to 15000 => 3%
    15000 + => 2.5%
*/

// if(1000 < amt && amt <=5000){
//     inrest = amt * 0.05
// }else{

// }

//  ladder if else
var a;
// let amt = 100, inrest;

// if(1000 < amt && amt <= 5000){
//     inrest = amt * 0.05;
// }else if(5000 < amt && amt <= 10000){
//     inrest = amt * 0.04;
// }else if(10000 <amt && amt <= 15000){
//     inrest = amt * 0.03;
// }else if(amt > 15000){
//     inrest = amt * 0.025
// }

// if(amt > 1000){
//     console.log("Intrest : ", inrest);
// }
// else{
//     console.log("Sorry You are invalid Amount Enter");
// }


// Switch
// let choice;
// choice = Number(prompt("Enter Your Choice: "));
// console.log(choice);
// console.log(typeof choice);
// switch(choice){
//     case "A" :
//         console.log("Monday");
//         break;
//     case "B" : 
//         console.log("Tuesday");
//         break;
//     case "C" :
//         console.log("Sunday");
//         break;
//     default : 
//         console.log("Invalid Choice");
//         break;
// }


// NaN => Not a Number => type -> Number

console.log("10" + 20);
console.log("10" - 20);
console.log("A" - 20);
console.log("A" * 20);
console.log("A" / 20);
console.log("11" * 20);
console.log("1234" / 20);

// let a ;
// console.log(a)
// console.log(typeof a)