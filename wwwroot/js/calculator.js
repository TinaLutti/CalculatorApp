console.log("Calculator.js loaded successfully!");


let currentValue = "0";
let previousValue = null;
let operation = null;
let waitingForValue = false;

function inputNumber(number) {
    if (waitingForValue) {
        currentValue = number.toString();
        waitingForValue = false;
    } else if (currentValue === "0") {
        currentValue = number.toString();
    } else {
        currentValue += number.toString();
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
function equals() {
    console.log("Equals clicked!");
    console.log("operation:", operation);
    console.log("previousValue:", previousValue);
    console.log("currentValue:", currentValue);
    console.log("waitingForValue:", waitingForValue);

    if (operation && previousValue !== null && !waitingForValue) {
        console.log("Calling calculate()");
        calculate();
        operation = null;
        previousValue = null;
        waitingForValue = false;
    } else {
        console.log("Conditions not met for calculate()");
    }
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

    currentValue = result.toString();
    previousValue = null;
    operation = null;
    updateDisplay();
}
function equals() {
    console.log("Equals clicked!");
    console.log("operation:", operation);
    console.log("previousValue:", previousValue);
    console.log("currentValue:", currentValue);
    console.log("waitingForValue:", waitingForValue);

    if (operation && previousValue !== null && !waitingForValue) {
        console.log("Calling calculate()");
        calculate();
        operation = null;
        previousValue = null;
        waitingForValue = false;
    } else {
        console.log("Conditions not met for calculate()");
    }
}



