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
        if (number == '.' && this.currOperand.includes('.')) return
        this.currOperand = this.currOperand.toString() + number.toString()
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currOperandText.innerText = this.currOperand
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

operatorButton.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})