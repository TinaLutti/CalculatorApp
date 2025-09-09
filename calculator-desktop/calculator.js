let currentValue = "0";
let previousValue = null;
let operation = null;
let waitingForValue = false;

function inputNumber(number) {
  number = String(number);

  // Tillåt svensk decimal från knapp (",") men räkna internt med "."
  if (number === ",") number = ".";

  // Om vi precis valt operator och börjar skriva nästa tal
  if (waitingForValue) {
    currentValue = number === "." ? "0." : number; // <- viktiga fixen
    waitingForValue = false;
    updateDisplay();
    return;
  }

  // Hindra dubbla decimaler
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
  console.log("=== UPDATE DISPLAY DEBUG ===");
  console.log("previousValue:", previousValue);
  console.log("operation:", operation);
  console.log("currentValue:", currentValue);

  if (previousValue && operation) {
    if (waitingForValue) {
      document.getElementById("display").textContent =
        previousValue + operation;
    } else {
      document.getElementById("display").textContent =
        previousValue + operation + currentValue;
    }
  } else {
    console.log("Going to else - displaying currentValue:", currentValue);
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
  console.log("=== CALCULATE DEBUG ===");
  console.log("previousValue:", previousValue, "type:", typeof previousValue);
  console.log("currentValue:", currentValue, "type:", typeof currentValue);
  console.log("operation:", operation);

  let result;
  let prev = parseFloat(previousValue);
  let curr = parseFloat(currentValue);

  console.log("prev after parseFloat:", prev);
  console.log("curr after parseFloat:", curr);

  switch (operation) {
    case "+":
      result = prev + curr;
      console.log("Addition result:", result);
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
  console.log("Final result:", result);

  currentValue = Math.round(result * 100000000) / 100000000;
  console.log("After Math.round:", currentValue);
  currentValue = currentValue.toString();
  console.log("After toString", currentValue);
  previousValue = null;
  operation = null;
  console.log("Before updateDisplay - currentValue:", currentValue);
  updateDisplay();
  console.log("After updateDisplay completed");
}
function equals() {
  console.log("=== EQUALS DEBUG ===");
  console.log("operation:", operation);
  console.log("previousValue:", previousValue);
  console.log("currentValue:", currentValue);
  console.log("waitingForValue:", waitingForValue);

  if (operation && previousValue !== null && !waitingForValue) {
    console.log("✅ Conditions met - calling calculate()");
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
  console.log("Key pressed:", event.key);

  if (event.key >= "0" && event.key <= "9") {
    console.log("Number detected:", event.key);
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

function minimizeWindow() {
  console.log("Minimize clicked!"); // Debug
  const { remote } = require("electron");
  remote.getCurrentWindow().minimize();
}

function maximizeWindow() {
  console.log("Maximize clicked!"); // Debug
  const { remote } = require("electron");
  const win = remote.getCurrentWindow();
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
}

function closeWindow() {
  console.log("Close clicked!"); // Debug
  const { remote } = require("electron");
  remote.getCurrentWindow().close();
}
