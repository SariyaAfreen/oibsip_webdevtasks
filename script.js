let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    display.textContent = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function appendNumber(number) {
    if (currentInput.length < 10) {
        currentInput += number;
        display.textContent = currentInput;
    }
}

function appendOperator(op) {
    if (currentInput !== '') {
        firstOperand = parseFloat(currentInput);
        operator = op;
        currentInput = '';
    }
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.textContent = currentInput;
    }
}

function calculateResult() {
    if (firstOperand !== null && currentInput !== '') {
        const secondOperand = parseFloat(currentInput);
        let result;
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
        }
        display.textContent = result.toString().slice(0, 10);
        firstOperand = null;
        currentInput = result.toString();
        operator = '';
    }
}
