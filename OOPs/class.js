// class -> state & behaviour

class Test{
    a = 10
    display(abc){
        return `Hello Wolrd ${abc}, ${this.a}`
    }
    sayHello(){
        console.log(this.display(235))
    }
}


let obj = new Test();
console.log(obj);

// console.log(obj.a)
// console.log(obj.display(123))

let p = new Test()
// console.log(p.display(222))
p.sayHello()
