let currentValue = "0";
let previousValue = null;
let operation = null;
let waitingForValue = false;

function inputNumber(number) {
  number = String(number);

  // Allowing Swedish decimal (,)
  if (number === ",") number = ".";

  if (waitingForValue) {
    currentValue = number === "." ? "0." : number; 
    waitingForValue = false;
    updateDisplay();
    return;
  }

  // Stopping dubbel decimal
  if (number === "." && String(currentValue).includes(".")) {
    return;
  }

  if (currentValue === "0") {
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
      document.getElementById("display").textContent =
        previousValue + operation;
    } else {
      document.getElementById("display").textContent =
        previousValue + operation + currentValue;
    }
  } else {
    document.getElementById("display").textContent = currentValue;
  }
}

function inputOperation(op) {
  if (previousValue === null) {
    previousValue = currentValue;
  } else if (!waitingForValue) {
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
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
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
    console.log("❌ Conditions NOT met for calculate()");
  }
}
function clearCalculator() {
  currentValue = "0";
  previousValue = null;
  operation = null;
  waitingForValue = false;
  updateDisplay();
}

document.addEventListener("keydown", function (event) {

  if (event.key >= "0" && event.key <= "9") {
    inputNumber(event.key);
  } else if (event.key === "+") {
    console.log("Plus detected");
    inputOperation("+");
  } else if (event.key === "-") {
    inputOperation("-");
  } else if (event.key === "*") {
    inputOperation("*");
  } else if (event.key === "/") {
    inputOperation("/");
  } else if (event.key === "." || event.key === ",") {
    inputNumber(event.key);
  } else if (event.key === "=" || event.key === "Enter") {
    event.preventDefault();
    equals();
    return;
  } else if (event.key === "Escape" || event.key === "Delete") {
    clearCalculator();
    return;
  } else if (event.key === "Backspace") {
    handleBackspace();
    return;
  } else {
    console.log("Other key:", event.key);
  }
});

function handleBackspace() {
  if (waitingForValue) return;
  if (currentValue.length > 1) {
    currentValue = currentValue.slice(0, -1);
  } else {
    currentValue = "0";
  }
  updateDisplay();
}

const { ipcRenderer } = require("electron");

async function minimizeApp() {
  console.log("Minimize clicked!");
  await ipcRenderer.invoke("minimize-window");
}

async function maximizeApp() {
  console.log("Maximize clicked!");
  await ipcRenderer.invoke("maximize-window");
}

async function closeApp() {
  console.log("Close clicked!");
  await ipcRenderer.invoke("close-window");
}
