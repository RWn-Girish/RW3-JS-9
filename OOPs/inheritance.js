// inheritance -> single, multilevel, multiple, Hierachical, Hybrid


// single Inheritance
class Base {
    constructor(name){
        this.name = name;
    }
    showBase() {
        console.log("Base Class Called...");
    }
};

class Derived extends Base {
    constructor(n){
        super(n);
    }
    showDerived(){
        // this.showBase();
        console.log("Derived Class Called", this.name);
    }
}


let obj = new Derived("John Peter");
obj.showDerived();
obj.showBase()


// Multilevel Inheritance
// class ABC{
//     showABC(){
//         console.log("ABC Class Called...");
//     }
// }
// class PQR extends ABC{
//     showPQR(){
//         this.showABC()
//         console.log("PQR Class Called...");
//     }
// }
// class XYZ extends PQR{
//     showXYZ(){
//         this.showPQR()
//         console.log("XYZ Class Called...");
//     }
// }

// let obj = new XYZ();
// obj.showABC()
// obj.showXYZ()
// obj.showPQR()


// Hierachical Inheritance

// class A{
//     showA(){
//         console.log("A Class Called");
//     }
// }

// class B extends A {
//     showB(){
//         console.log("B Class Called");
//     }
// }
// class C extends A {
//     showC(){
//         console.log("C Class Called");
//     }
// }
// class D extends B {
//     showD(){
//         console.log("D Class Called");
//     }
// }

// let obj1 = new B();

// obj1.showA()
// obj1.showB()

// let obj2 = new C();
// obj2.showA()
// obj2.showC()