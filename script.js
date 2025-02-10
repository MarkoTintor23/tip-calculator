class Calculator {
  constructor() {
    this.billAmount = document.querySelector("#bill-amount");
    this.tipPercentage = document.querySelector("#tip-percentage");
    this.calcButton = document.querySelector("#calculate-btn");
    this.total = document.querySelector("#total-amount");

    this.addEventListeners();
  }

  addEventListeners() {
    this.calcButton.addEventListener("click", () => this.calculateTotal());
  }

  calculateTotal() {
    let enterBill = parseInt(this.billAmount.value);
    let enterPercentage = parseInt(this.tipPercentage.value);
    let percentage = (enterBill * enterPercentage) / 100;

    if (
      isNaN(enterBill) ||
      isNaN(enterPercentage) ||
      enterBill <= 0 ||
      enterPercentage < 0
    ) {
      this.total.textContent = "Please enter valid value";
      return;
    }

    this.total.textContent = (percentage + enterBill).toFixed(2);
  }
}

const tipCalculator = new Calculator();
