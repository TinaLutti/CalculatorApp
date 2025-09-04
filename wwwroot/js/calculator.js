let currentValue = "0";
let previousValue = null;
let operation = null;
let waitingForValue = false;

function inputNumber(number) {

    number = number.toString();
    if (number === ",") number = ".";

    if (number === "." && String(currentValue).includes(".")) {
        return;
    }

    if (waitingForValue) {
        currentValue = number.toString();
        waitingForValue = false;
    } else if (currentValue === "0") {
        if (number === ".") {
            currentValue = "0.";
        } else if (number === "0") {
            currentValue = "0";
        } else {
            currentValue = number;
        }
    } else {
        currentValue += number;
    }
    updateDisplay();
}

function updateDisplay() {
    if (previousValue && operation) {
        if (waitingForValue) {
            document.getElementById("display").textContent = previousValue + operation;
        } else {
            document.getElementById("display").textContent = previousValue + operation + currentValue;
        }
    } else {
        document.getElementById("display").textContent = currentValue;
    }
}

function inputOperation(op) {
    if (previousValue === null) {
        previousValue = currentValue;
    }
    else if (!waitingForValue) {
        calculate();
        previousValue = currentValue;
    }
    operation = op;
    waitingForValue = true;
    updateDisplay();
}
function calculate() {
    let result;
    let prev = parseFloat(previousValue);
    let curr = parseFloat(currentValue);

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if (curr === 0) {
                document.getElementById("display").textContent = "Error";
                currentValue = "0";
                previousValue = null;
                operation = null;
                return;
            }
            result = prev / curr;
            break;

        default:
            return;
    }

    currentValue = Math.round(result * 100000000) / 100000000;
    currentValue = currentValue.toString();
    previousValue = null;
    operation = null;
    updateDisplay();
}
function equals() {

    if (operation && previousValue !== null && !waitingForValue) {
        calculate();
        operation = null;
        previousValue = null;
        waitingForValue = false;
    } else {
        console.log("Conditions not met for calculate()");
    }
}
function clearCalculator() {
    currentValue = "0";
    previousValue = null;
    operation = null;
    waitingForValue = false;
    updateDisplay();
}



