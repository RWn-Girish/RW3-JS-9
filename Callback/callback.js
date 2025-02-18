// Callback => function as argument in another function
// Callback hell => multiple callback

// function hello(a,b) {
//     console.log(`Hello Guys....`);
//     setTimeout(()=> a(b), 2000);
// }

// function hello1(b) {
//     console.log(`Hello 1 Guys....`);
//     setTimeout(b, 3000);
// }
// function hello2() {
//     console.log(`Hello 2 Guys....`);
// }


// function Test(name, callback, a, b) {
//     console.log("Test Function Called....", name);
//     setTimeout(()=>callback(a, b), 1000)
// }


// Test("john", hello, hello1, hello2)


// array => map, filter, forEach(()=> {})

const Test = () => {
    console.log("Test Called...");
    let a = () => {
        console.log('a is called....');
        let b = () => {
            console.log(`b is called...`);
            let c = () => {
                console.log(`c is called...`);
            }
            c()
        }
        setTimeout(b, 2000);
    }
    setTimeout(a, 1000);
}

Test();