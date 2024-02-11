class Calculator {
    constructor(previousOperandTextEl, currentOperandTextEl) {
        this.previousOperandTextEl = previousOperandTextEl;
        this.currentOperandTextEl = currentOperandTextEl;
        this.clear();
    }

    clear() {
        this.currentOperand = ' ';
        this.previousOperand = ' ';
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextEl.innerText = this.currentOperand;
    }

}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextEl = document.querySelector('[data-previous-operand]');
const currentOperandTextEl = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextEl, currentOperandTextEl);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})












