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

let productPriceElement = document.querySelector("#productPriceText");

macbook.onclick = function() {
    product = products[0];
    productPriceElement.innerText = `You have chosen the ${product.name}. The price is $${product.price}`;
    installmentsAskFunction();
    localStorage.setItem('product', `${product.name}`);
}
ipad.onclick = function() {
    product = products[1];
    productPriceElement.innerText = `You have chosen the ${product.name}. The price is $${product.price}`;
    installmentsAskFunction();
    localStorage.setItem('product', `${product.name}`);
}
iphone.onclick = function() {
    product = products[2];
    productPriceElement.innerText = `You have chosen the ${product.name}. The price is $${product.price}`;
    installmentsAskFunction();
    localStorage.setItem('product', `${product.name}`);
}

function installmentsAskFunction() {
    let h3 = document.querySelector("#installmentsAsk");
    h3.innerText = "Would you like to pay in installments?";
    let divInstallmentsAsk = document.querySelector("#installmentsAskOption")
    divInstallmentsAsk.innerHTML = `
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
    let pInstallmentsAsk = document.querySelector("#productInstallmentsText");
    let h3InstallmentsAsk;
    installmentsYes.onclick = function() {
        pInstallmentsAsk.innerText = "You have chosen installments."
        h3InstallmentsAsk = document.querySelector("#h3InstallmentsAsk");
        h3InstallmentsAsk.innerText = "How many installments would you like?";
        installmentsFunction();
        localStorage.setItem('installments', true);
    };
    installmentsNo.onclick = function() {
        pInstallmentsAsk.innerText = `You will have to pay $${product.price} in one payment.`;
        localStorage.setItem('installments', false);
    };
};

function installmentsFunction() {
    let divNumberOptions = document.querySelector("#divNumberOptions");
    divNumberOptions.innerHTML = `
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
    let pInstallmentsNumber = document.querySelector("#pInstallmentsNumber");
    let pInstallmentsCalc = document.querySelector("#pInstallmentsCalc");
    installments6.onclick = function() {
        installmentsNumber = 6;
        installmentsCalcFunction();
        localStorage.setItem('installmentsNumber', installmentsNumber);
    }
    installments9.onclick = function() {
        installmentsNumber = 9;
        installmentsCalcFunction();
        localStorage.setItem('installmentsNumber', installmentsNumber);
    }
    installments12.onclick = function() {
        installmentsNumber = 12;
        installmentsCalcFunction();
        localStorage.setItem('installmentsNumber', installmentsNumber);
    }
    function installmentsCalcFunction() {
        installmentsCalc = Math.round(product.price / installmentsNumber);
        pInstallmentsNumber.innerText = `You have chosen ${installmentsNumber} installments.`;
        pInstallmentsCalc.innerText = `You will have to pay ${installmentsNumber} installments of $${installmentsCalc}`;
    }
};