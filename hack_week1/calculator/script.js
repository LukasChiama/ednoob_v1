const calculatorScreen = document.getElementById('screen');
let firstNumber = '';
let secondNumber = '';
let operator = '';

function getNumber(value) {
  firstNumber += value;
  calculatorScreen.innerHTML = firstNumber;
}

function getOperator(userOperator) {
  secondNumber = firstNumber;
  operator = userOperator;
  calculatorScreen.innerHTML = '';
  firstNumber = '';
}

function getAnswer() {
  if (operator == '+') {
    calculatorScreen.innerHTML = Number(secondNumber) + Number(firstNumber);
    firstNumber = '';
    secondNumber = '';
  }
  if (operator == '-') {
    calculatorScreen.innerHTML = Number(secondNumber) - Number(firstNumber);
    firstNumber = '';
    secondNumber = '';
  }
}
