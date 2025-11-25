let calculation = '';
let answer = '';

function appendNumber(number) {
    calculation += number;
    updateDisplay();
}

function appendOperator(operator) {
    calculation += ` ${operator} `;
    updateDisplay();
}

function clearDisplay() {
    calculation = '';
    answer = '';
    updateDisplay();
}

function deleteLast() {
    calculation = calculation.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        answer = eval(calculation);
        updateDisplay();
        calculation = '';
    } catch (error) {
        answer = 'Error';
        updateDisplay();
        calculation = '';
    }
}

function updateDisplay() {
    document.getElementById('calculation').innerText = calculation;
    document.getElementById('answer').innerText = answer;
}