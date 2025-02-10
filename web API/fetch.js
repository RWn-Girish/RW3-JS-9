

fetch('https://dummyjson.com/products?limit=5')
// .then((res)=> res.json())
// .then(data => {
//     let productList = document.querySelector("#productList");
//     data.products.forEach((product) => {
//         let  div = document.createElement('div');
//         let image = document.createElement('img');
//         let h3 = document.createElement('h3')
//         let p = document.createElement('p')

//         image.setAttribute('src',product.images[0])
//         image.style.height = "200px"
//         image.style.width = "200px"
//         h3.innerHTML = product.title
//         p.innerHTML = product.description

//         div.appendChild(image);
//         div.appendChild(h3)
//         div.appendChild(p)
//         productList.append(div)
// })
// })
// .catch((err) => console.log(err));


document.querySelector('button').addEventListener("click", () => {

    axios.get("https://dog.ceo/api/breeds/image/random")
.then((res)=> {
    console.log(res.data)

    let productList = document.querySelector("#productList");
    let image = document.createElement('img');
    image.setAttribute('src',res.data.message)
    image.style.height = "200px"
    image.style.width = "200px"
    image.style.padding = "10px"
    
    // productList.append(image)
    productList.prepend(image)
})
})


