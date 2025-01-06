const billAmount = document.querySelector("#bill-amount");
const tipPercentage = document.querySelector("#tip-percentage");
const calcButton = document.querySelector("#calculate-btn");
const total = document.querySelector("#total-amount");

calcButton.addEventListener("click", function () {
  let enterBill = parseInt(billAmount.value);
  let enterPercentage = parseInt(tipPercentage.value);
  let percentage = (enterBill * enterPercentage) / 100;

  if (
    isNaN(enterBill) ||
    isNaN(enterPercentage) ||
    enterBill <= 0 ||
    enterPercentage < 0
  ) {
    total.textContent = "Please enter valid value";
    return;
  }

  total.textContent = (percentage + enterBill).toFixed(2);
});
