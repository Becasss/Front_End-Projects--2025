const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentOperand = '';
let previousOperand = '';
let operation = null;

// Update the display
function updateDisplay(value) {
  display.textContent = value || '0';
}

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.dataset.number;
    const action = button.dataset.action;

    if (number) {
      handleNumber(number);
    } else if (action) {
      handleAction(action);
    }
  });
});

// Handle number input
function handleNumber(number) {
  if (currentOperand.includes('.') && number === '.') return;
  currentOperand += number;
  updateDisplay(currentOperand);
}

// Handle actions
function handleAction(action) {
  switch (action) {
    case 'clear':
      currentOperand = '';
      previousOperand = '';
      operation = null;
      updateDisplay('0');
      break;
    case 'delete':
      currentOperand = currentOperand.slice(0, -1);
      updateDisplay(currentOperand);
      break;
    case 'percent':
      currentOperand = (parseFloat(currentOperand) / 100).toString();
      updateDisplay(currentOperand);
      break;
    case 'add':
    case 'subtract':
    case 'multiply':
    case 'divide':
      setOperation(action);
      break;
    case 'equals':
      calculate();
      break;
    case 'decimal':
      handleNumber('.');
      break;
    default:
      break;
  }
}

// Set operation
function setOperation(action) {
  if (currentOperand === '') return;
  if (previousOperand !== '') calculate();
  operation = action;
  previousOperand = currentOperand;
  currentOperand = '';
}

// Perform calculation
function calculate() {
  if (!operation || currentOperand === '' || previousOperand === '') return;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  switch (operation) {
    case 'add':
      currentOperand = (prev + current).toString();
      break;
    case 'subtract':
      currentOperand = (prev - current).toString();
      break;
    case 'multiply':
      currentOperand = (prev * current).toString();
      break;
    case 'divide':
      currentOperand = current === 0 ? 'Error' : (prev / current).toString();
      break;
    default:
      break;
  }
  operation = null;
  previousOperand = '';
  updateDisplay(currentOperand);
}

// Initialize display
updateDisplay('0');
