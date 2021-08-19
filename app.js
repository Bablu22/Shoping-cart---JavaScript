function updateNumber(product, price, issAdd) {
    const productText = document.getElementById(product + '-number');
    let productNumber = parseInt(productText.value);


    if (issAdd == true) {
        productNumber = productNumber + 1;
    }
    else if (productNumber > 0) {
        productNumber = productNumber - 1;
    }
    productText.value = productNumber

    // Total
    const productTotal = document.getElementById(product + '-total');
    const newProduct = productNumber * price;
    productTotal.innerText = newProduct;

    // Update Total Value

    const phoneTotalText = document.getElementById('phone-total').innerText;
    const caseTotalText = document.getElementById('case-total').innerText;
    const phoneTotal = parseInt(phoneTotalText);
    const caseTotal = parseInt(caseTotalText)
    const total = parseInt(phoneTotal + caseTotal);

    //subtotal
    const subTotal = document.getElementById('subtotal');
    subTotal.innerText = total;
    // Tax
    const taxText = document.getElementById('tax');
    const tax = total / 10;
    taxText.innerText = tax;
    // Total
    const totalText = document.getElementById('total');
    const totalAmount = total + tax;
    totalText.innerText = totalAmount;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateNumber('phone', 1000, true)
    // productTotal()
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateNumber('phone', 1000, false)
})
document.getElementById('case-plus').addEventListener('click', function () {
    updateNumber('case', 100, true)
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateNumber('case', 100, false)
})








