let currentValue = "0";
let previousValue = null;
let operation = null;
let waitingForValue = false;

function inputNumber(number) {
    console.log("currentValue:", currentValue, "type:", typeof currentValue);
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
    document.getElementById("display").textContent = currentValue;

}

function inputOperation(op) {
    if (previousValue === null) {
        previousValue = currentValue;
    }
    else if (!waitingForValue) {
        calculate();
    }
    operation = op;
    waitingForValue = true;
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



