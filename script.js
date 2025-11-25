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
    calculation = calculation.trim();
    if (calculation.endsWith(' ')) {
        calculation = calculation.slice(0, -3);
    } else {
        calculation = calculation.slice(0, -1);
    }
    updateDisplay();
}

function calculateResult() {
    try {
        const sanitizedCalculation = calculation.replace(/×/g, '*').replace(/÷/g, '/');
        answer = eval(sanitizedCalculation);
        updateDisplay();
        calculation = answer.toString();
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