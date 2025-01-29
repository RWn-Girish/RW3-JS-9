// Polymorphism =>  overloading & OverRiding


// class Test {
//     add(a,b,c=0){
//         return a + b + c;
//     }
// }

// let obj = new Test();

// console.log(obj.add(11,22))
// console.log(obj.add(11,22,33))


class Hello{
    display(){
        console.log("Hello Class Called");
    }
}
class Test extends Hello{
    display(){
        console.log("Test Class Called");
    }
}

let obj = new Test();

obj.display()