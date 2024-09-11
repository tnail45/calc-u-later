class Calculator {
    constructor(prevOperandText, currOperandText) {
        this.prevOperandText = prevOperandText
        this.currOperandText = currOperandText
        this.clear()
    }

    clear() {
        this.currOperand = ""
        this.prevOperand = ""
        this.operation = undefined
    }

    delete() {

    }

    appendNum(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

    }
}


const numButton = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const prevOperandText = document.querySelector('[data-previous-operand]');
const currOperandText = document.querySelector('[data-current-operand]');

const calculator = new Calculator(prevOperandText, currOperandText);

numButton.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNum(button.innerText)
        calculator.updateDisplay()
    })
})