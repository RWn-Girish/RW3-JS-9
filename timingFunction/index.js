// Timing Function => setTimeout, setInterval, clearTimeout, clearInterval

/*
    setTimeout(()=>{
        }, 5000)

*/


// console.log("Hello good morning");
// let a =10, b = 20;

// let id = setTimeout(()=> {
//     console.log("total: ",a+b);

// }, 3000)
// console.log("SetTimeOut Id: ", id);
// clearTimeout(id)


// let ID = setInterval(()=> {
//     console.log("total: ",a+b);

// }, 3000)
// console.log("SetInterval ID: ", ID);
// clearInterval(ID);
// console.log("Red & White");



// setTimeout(()=> {
//     document.getElementById('test').style.display = "block"
// }, 5000);


    // console.log(time)
// setInterval(()=> {
//     let time = new Date().toLocaleTimeString()
//     document.querySelector('h2').innerHTML = time;
// },1000)



// Counter
let count = 0, id;
// setInterval(()=> {
//     document.querySelector('h2').innerHTML = count;
//     count++;
// }, 1000)

let startBtn = document.querySelector("#start")
let stopBtn = document.querySelector("#stop")

startBtn.addEventListener("click", ()=> {
    id = setInterval(()=> {
        let data = document.createElement('h2')
        data.innerHTML = count;
        document.body.append(data)
        // document.querySelector('h2').innerHTML = count;
        count++;
    }, 1000)
});

stopBtn.addEventListener("click", () => {
    clearInterval(id);
})