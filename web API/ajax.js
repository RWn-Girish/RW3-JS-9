// AJAX


let obj = new XMLHttpRequest();

obj.open("GET", 'https://dummyjson.com/products', true)

obj.onload = function () {
    // console.log(obj.responseText);
    let data = JSON.parse(obj.responseText);
    console.log(data.products);
    let productList = document.querySelector("#productList");
    data.products.forEach((product) => {
        let  div = document.createElement('div');
        let image = document.createElement('img');
        let h3 = document.createElement('h3')
        let p = document.createElement('p')

        image.setAttribute('src',product.images[0])
        image.style.height = "200px"
        image.style.width = "200px"
        h3.innerHTML = product.title
        p.innerHTML = product.description

        div.appendChild(image);
        div.appendChild(h3)
        div.appendChild(p)
        productList.append(div)
})
    
};

obj.send()