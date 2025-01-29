// Array => Collection of Elements, index (0)

// let a = [11,22,33,44,55,66,77];
// console.log(a);
// console.log(Array.isArray(a))        // check array or not
// console.log(a.includes(33));
// console.log(typeof a);
// console.log(a[2]);
// console.log(a[20]);
// a[15] = 15
// a[30] = 34;
// console.log(a);


// for(let i = 0; i<a.length ;i++){
//     console.log(a[i] * 2);
// }

// console.log(a.length)

// Method => Push (enter element into last position)

// a.push(88)
// a.push(99, 100, 101)

// POP => remove last position
// a.pop()
// a.pop()
// a.pop()
// a.pop()

// shift => first Index remove
// a.shift()
// a.shift()
// a.shift()

// unshift() => enter first index
// a.unshift(101)
// a.unshift(200, 300, 400)


// splice(startIndex, deleteCount, addElements)
// a.splice(0, 3, 100)
// console.log(a);



let data = [110,22,330,44,55,66];
console.log(data);

// data.forEach((value, index)=> {
//     console.log(index, "==> ", value)
// })

// function filterFun(value, index) {
//     return value % 2 !== 0;
//  }

// let aa = data.filter(filterFun)

// console.log(aa);


// let aa = data.some((val, i)=> {
//     return val %2 != 0
// })
// console.log(aa);

// let aa = data.every((val, i)=> {
//     return val %2 == 0
// })
// console.log(aa);

// console.log(data.indexOf(550))


let aa = data.map((val, i) => {
    return val * 3;
})

console.log("aa ====> ", aa);
console.log("data ====> ", data);
