let currentValue = "0";
let previousValue = null;
let operation = null;
let waitingForValue = false;
let isMuted = true;

function inputNumber(number) {
  playNumberSound();
  number = String(number);

  // Turn , to . (Swedish decimal)
  if (number === ",") number = ".";

  if (waitingForValue) {
    currentValue = number === "." ? "0." : number;
    waitingForValue = false;
    updateDisplay();
    return;
  }
  if (String(currentValue).length >= 12) {
    return; // Max 12 digits
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
  if (currentValue.length > 12) {
    currentValue = currentValue.slice(0, 12);
  }

  // Shows currentValue in main display
  document.getElementById("display").textContent = currentValue;

  // Show operation status in separate indicator
  const indicator = document.getElementById("operation-indicator");
  if (previousValue && operation) {
    indicator.textContent = previousValue + " " + operation;
  } else {
    indicator.textContent = ""; // Empty when no operator is active
  }
}
function inputOperation(op) {
  playOperatorSound();
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
        document.getElementById("operation-indicator").textContent = "";
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

  // Showing the ecvation in indicator before updating currentValue
  document.getElementById("operation-indicator").textContent =
    previousValue + " " + operation + " " + currentValue + " =";

  currentValue = Math.round(result * 100000000) / 100000000;
  currentValue = currentValue.toString();
  previousValue = null;
  operation = null;

  // Updating display (not indicator)
  document.getElementById("display").textContent = currentValue;
}
function equals() {
  playOperatorSound();
  if (operation && previousValue !== null && !waitingForValue) {
    calculate();
    operation = null;
    previousValue = null;
    waitingForValue = false;
  }
}
function clearCalculator() {
  playOperatorSound();
  currentValue = "0";
  previousValue = null;
  operation = null;
  waitingForValue = false;
  updateDisplay();
}

document.addEventListener("keydown", function (event) {
  if (event.key >= "0" && event.key <= "9") {
    playNumberSound();
    inputNumber(event.key);
  } else if (event.key === "+") {
    playOperatorSound();
    inputOperation("+");
  } else if (event.key === "-") {
    playOperatorSound();
    inputOperation("-");
  } else if (event.key === "*") {
    playOperatorSound();
    inputOperation("*");
  } else if (event.key === "/") {
    playOperatorSound();
    inputOperation("/");
  } else if (event.key === "." || event.key === ",") {
    playNumberSound();
    inputNumber(event.key);
  } else if (event.key === "=" || event.key === "Enter") {
    playOperatorSound();
    event.preventDefault();
    equals();
    return;
  } else if (event.key === "Escape" || event.key === "Delete") {
    playOperatorSound();
    clearCalculator();
    return;
  } else if (event.key === "Backspace") {
    playOperatorSound();
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
  await ipcRenderer.invoke("minimize-window");
}

async function maximizeApp() {
  await ipcRenderer.invoke("maximize-window");
}

async function closeApp() {
  await ipcRenderer.invoke("close-window");
}

function playNumberSound() {
  if (isMuted) return;
  const audio = document.getElementById("numberSound");
  audio.currentTime = 0;
  audio.play().catch((e) => {});
}

function playOperatorSound() {
  if (isMuted) return;
  const audio = document.getElementById("operatorSound");
  audio.currentTime = 0;
  audio.play().catch((e) => {});
}

function toggleMute() {
  isMuted = !isMuted;

  const unmuteIcon = document.getElementById("icon-unmute");
  const muteIcon = document.getElementById("icon-mute");

  // Show/hide mute/unmute svg:s
  if (isMuted) {
    unmuteIcon.style.display = "none";
    muteIcon.style.display = "block";
  } else {
    muteIcon.style.display = "none";
    unmuteIcon.style.display = "block";
  }
}

let keyMap = {
  // Maping keys to html
  0: "key-0",
  1: "key-1",
  2: "key-2",
  3: "key-3",
  4: "key-4",
  5: "key-5",
  6: "key-6",
  7: "key-7",
  8: "key-8",
  9: "key-9",

  "+": "key-plus",
  "-": "key-minus",
  "*": "key-multiply",
  "/": "key-divide",

  Enter: "key-equals",
  "=": "key-equals", // Enter and =  can be used
  ".": "key-decimal",
  ",": "key-decimal", // . and , can be used

  Escape: "key-clear",
  Backspace: "key-clear",
};

function handleKeyDown(event) {
  let key = event.key;
  let buttonId = keyMap[key];

  if (!buttonId) {
    return;
  }

  let button = document.getElementById(buttonId);

  if (!button) {
    return;
  }

  button.classList.add("active-key");
}

function handleKeyUp(event) {
  let key = event.key;
  let buttonId = keyMap[key];

  if (!buttonId) {
    return;
  }

  let button = document.getElementById(buttonId);

  if (!button) {
    return;
  }

  button.classList.remove("active-key");
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
