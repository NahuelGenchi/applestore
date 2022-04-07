let laptop = {
    name: "MacBook Air",
    price: 999,
}
let tablet = {
    name: "iPad Air",
    price: 599,
}
let phone = {
    name: "iPhone 13",
    price: 829,
}
let products = [laptop, tablet, phone];
let product;

let macbook = document.querySelector("#macbook");
let ipad = document.querySelector("#ipad");
let iphone = document.querySelector("#iphone");

let productPriceElement = document.createElement('p');
productPriceElement.setAttribute("id", "productPriceText")
productPriceElement.setAttribute("class", "p")

document.querySelector("#mainBody").appendChild(productPriceElement);

let clicks = 0;

macbook.onclick = function() {
    product = products[0];
    productPriceElement.innerText = `You have chosen the ${product.name}. The price is $${product.price}`;
    clicks += 1;
    if (clicks === 1) {
        installmentsAskFunction();
    }
}
ipad.onclick = function() {
    product = products[1];
    productPriceElement.innerText = `You have chosen the ${product.name}. The price is $${product.price}`;
    clicks += 1;
    if (clicks === 1) {
        installmentsAskFunction();
    }
}
iphone.onclick = function() {
    product = products[2];
    productPriceElement.innerText = `You have chosen the ${product.name}. The price is $${product.price}`;
    clicks += 1;
    if (clicks === 1) {
        installmentsAskFunction();
    }
}

function installmentsAskFunction() {
    let h3 = document.createElement('h3');
    document.querySelector("#mainBody").appendChild(h3);
    h3.innerText = "Would you like to pay in installments?";
    let div = document.createElement('div');
    document.querySelector("#mainBody").appendChild(div);
    div.setAttribute("class", "row rowButton");
    div.innerHTML = `
        <div class='col'>
            <input class="button" type="button" value="Yes">  
        </div>
        <div class='col'>
            <input class="button" type="button" value="No">
        </div>
    `;
}