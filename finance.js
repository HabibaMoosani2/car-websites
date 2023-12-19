$(document).ready(function(){$(".Message--animate").fadeIn(1500,function(){$(this).animate({"margin-top":"0"},750)}),$(".fa").click(function(){$(".message-sticky").hide()})}),$(window).scroll(function(){$(this).scrollTop()>1?$(".message-sticky").addClass("sticky"):$(".message-sticky").removeClass("sticky")});

function submitForm() {
// Simple validation example
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var carModel = document.getElementById('carModel').value;
var loanAmount = document.getElementById('loanAmount').value;

if (!name || !email || !carModel || !loanAmount) {
alert('Please fill all fields.');
} else {
alert('Form submitted successfully!');
// You can add further actions, such as sending the data to a server.
}
}
const calculateBtn = document.getElementById("calculate-btn");
const downloadBtn = document.getElementById("download-btn");
const carPriceInput = document.getElementById("car-price");
const downPaymentInput = document.getElementById("down-payment");
const loanTermInput = document.getElementById("loan-term");
const interestRateInput = document.getElementById("interest-rate");
const salesTaxInput = document.getElementById("sales-tax");
const monthlyPaymentSpan = document.getElementById("monthly-payment");
const totalPaymentSpan = document.getElementById("total-payment");
const totalInterestSpan = document.getElementById("total-interest");
const totalCostSpan = document.getElementById("total-cost");
const errorMessage = document.getElementById("error-message");

function calculateLoan() {
  const carPrice = parseFloat(carPriceInput.value);
  const downPayment = parseFloat(downPaymentInput.value);
  const loanTerm = parseFloat(loanTermInput.value) * 12;
  const interestRate = parseFloat(interestRateInput.value) / 1200;
  const salesTax = parseFloat(salesTaxInput.value) / 100;
  
  if (isNaN(carPrice) || isNaN(downPayment) || isNaN(loanTerm) || isNaN(interestRate) || isNaN(salesTax)) {
    errorMessage.textContent = "Please enter valid values for all fields.";
    return;
  } else if (downPayment > carPrice) {
    errorMessage.textContent = "Down payment cannot be greater than car price.";
    return;
  } else {
    errorMessage.textContent = "";
  }
  
  const loanAmount = carPrice + (carPrice * salesTax) - downPayment;
  const monthlyPayment = (loanAmount * interestRate * (Math.pow(1 + interestRate, loanTerm))) / (Math.pow(1 + interestRate, loanTerm) - 1);
  const totalPayment = monthlyPayment * loanTerm;
  const totalInterest = totalPayment - loanAmount;
  const totalCost = carPrice + (carPrice * salesTax) + totalInterest - downPayment;
  
  monthlyPaymentSpan.textContent = "$" + monthlyPayment.toFixed(2);
  totalPaymentSpan.textContent = "$" + totalPayment.toFixed(2);
  totalInterestSpan.textContent = "$" + totalInterest.toFixed(2);
  totalCostSpan.textContent = "$" + totalCost.toFixed(2);
  
  downloadBtn.href = `data:text/plain;charset=utf-8,Car Price: $${carPrice.toFixed(2)}
  Down Payment: $${downPayment.toFixed(2)}
  Loan Term: ${loanTermInput.value} years
  Interest Rate: ${interestRateInput.value}%
  Sales Tax: ${salesTaxInput.value}%
  Monthly Payment: $${monthlyPayment.toFixed(2)}
  Total Payment: $${totalPayment.toFixed(2)}
  Total Interest: $${totalInterest.toFixed(2)}
  Total Cost: $${totalCost.toFixed(2)}`;
  
  document.getElementById("result").style.display = "block";
}

calculateBtn.addEventListener("click", calculateLoan);

