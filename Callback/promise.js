// Promise => 1. Pending    2. Resolve  3. Reject
// Promise hell


// let data  = new Promise((resolve, reject) => {
//     let a = true;
//     if(a){
//         resolve("Your Promise is Resolved...");
//     }else{
//         reject("Your Promise Rejected.....!!!");
//     }
// })

// data.then((result)=> console.log(result))
// .then()
// .then()
// .catch(err => console.log(err))



// Async await

// let promise = new Promise((rev, rej)=> {
//     setTimeout(()=> {
//         rev("Resolved OutPut.....");
//     }, 5000)
// })


// async function Hello () {
//     let data = await promise;
//     console.log(data);
// }

// Hello()


async function randomDog(){
    let response = await fetch('https://dog.ceo/api/breeds/list/all');
    let data = await response.json();
    console.log(data);
}

randomDog()