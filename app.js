function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();

}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;

}
function calculateTotal() {
    // const phoneInput=document.getElementById('phone-number');
    // const phoneNumber=parseInt(phoneInput.value);
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10;
    const totalAmount = subtotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = totalAmount;

}
// phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);

});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);

});
// handle case increase decrease event
document.getElementById('case-plus').addEventListener('click', function () {

    updateProductNumber('case', 59, true);

});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);



})
