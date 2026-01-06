const resultInput = document.getElementById('result');
const startScreen = document.getElementById('start-screen');
const calculator = document.getElementById('calculator');

function startCalculator() {
    startScreen.style.display = 'none';
    calculator.style.display = 'block';
}

function appendNumber(number) {
    resultInput.value += number;
}

function appendOperator(operator) {
    resultInput.value += operator;
}

function calculateResult() {
    try {
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        resultInput.value = 'Error';
    }
}

function clearResult() {
    resultInput.value = '';
}

function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}
