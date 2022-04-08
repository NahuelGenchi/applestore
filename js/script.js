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
    div.setAttribute("class", "rowButton");
    div.innerHTML = `
        <div class='colRow'>
            <a href="#productInstallmentsText">
                <input id="installmentsYes" class="button" type="button" value="Yes"> 
            </a> 
        </div>
        <div class='colRow'>
            <a href="#productInstallmentsText">
                <input id="installmentsNo" class="button" type="button" value="No">
            </a>
        </div>`;
    let installmentsYes = document.querySelector("#installmentsYes");
    let installmentsNo = document.querySelector("#installmentsNo");
    let pInstallmentsAsk = document.createElement("p");
    pInstallmentsAsk.setAttribute("class", "p");
    pInstallmentsAsk.setAttribute("id", "productInstallmentsText");
    let h3InstallmentsAsk;
    installmentsYes.onclick = function() {
        document.querySelector("#mainBody").appendChild(pInstallmentsAsk);
        pInstallmentsAsk.innerText = "You have chosen installments."
        h3InstallmentsAsk = document.createElement("h3");
        document.querySelector("#mainBody").appendChild(h3InstallmentsAsk);
        h3InstallmentsAsk.innerText = "How many installments would you like?";
        installmentsFunction();
    };
    installmentsNo.onclick = function() {
        document.querySelector("#mainBody").appendChild(pInstallmentsAsk);
        pInstallmentsAsk.innerText = `You will have to pay $${product.price} in one payment.`;
    };
};

function installmentsFunction() {
    let div = document.createElement("div");
    div.setAttribute("class", "rowButton");
    document.querySelector("#mainBody").appendChild(div);
    div.innerHTML = `
    <div class='colRow'>
        <a href="#pInstallmentsNumber">
            <input id="installments6" class="button" type="button" value="6"> 
        </a> 
    </div>
    <div class='colRow'>
        <a href="#pInstallmentsNumber">
            <input id="installments9" class="button" type="button" value="9">
        </a>
    </div>
    <div class='colRow'>
        <a href="#pInstallmentsNumber">
            <input id="installments12" class="button" type="button" value="12">
        </a>
    </div>`;
    let installments6 = document.querySelector("#installments6");
    let installments9 = document.querySelector("#installments9");
    let installments12 = document.querySelector("#installments12");
    let installmentsNumber;
    let installmentsCalc;
    let pInstallmentsNumber = document.createElement("p");
    pInstallmentsNumber.setAttribute("id", "pInstallmentsNumber");
    pInstallmentsNumber.setAttribute("class", "p");
    let pInstallmentsCalc = document.createElement("p");
    pInstallmentsCalc.setAttribute("class", "p");
    function installmentsCalcFunction() {
        installmentsCalc = product.price / installmentsNumber;
        document.querySelector("#mainBody").appendChild(pInstallmentsNumber);
        pInstallmentsNumber.innerText = `You have chosen ${installmentsNumber} installments.`;
        document.querySelector("#mainBody").appendChild(pInstallmentsCalc);
        pInstallmentsCalc.innerText = `You will have to pay ${installmentsNumber} installments of $${installmentsCalc}`;
    }
    installments6.onclick = function() {
        installmentsNumber = 6;
        installmentsCalcFunction();
    }
    installments9.onclick = function() {
        installmentsNumber = 9;
        installmentsCalcFunction();
    }
    installments12.onclick = function() {
        installmentsNumber = 12;
        installmentsCalcFunction();
    }
};