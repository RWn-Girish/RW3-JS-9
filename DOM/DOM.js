// 1. getElementById

// let data = document.getElementById("hello");

// data.style.color = "Blue"

// data.innerHTML = "JavaScript"

// console.log(data);


// 2. getELmentsByTagName

// let alltages = document.getElementsByTagName('h2')

// console.log(alltages);



// 3. getElementsByClassname

// let allClass = document.getElementsByClassName('abc')

// console.log(allClass);

// for (let index = 0; index < allClass.length; index++) {
//     if(index == 1){
//         const element = allClass[index];
//     element.style.color = "blue"
//     }
//     else{
// const element = allClass[index];
//     element.style.color = "red"
//     }
// }


// 4. querySelector  & querySelectorAll

let data = document.querySelector('h2')
// console.log(data);

data.textContent = "Khushal"

data.addEventListener('mouseover', ()=> {
    console.log('Mouse Over Event Called....');
})
data.addEventListener('mouseout', ()=> {
    console.log('Mouse Out Event Called....');
})


// data.style.border = "1px dashed red"
// data.style.padding = "20px"

// data.setAttribute('class', 'abc')
// data.removeAttribute('style')