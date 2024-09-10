class Calculator {
    constructor(prevOperand, currOperand) {
        this.prevOperand = prevOperand
        this.currOperand = currOperand
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
const prevOperand = document.querySelector('[data-previous-operand]');
const currOperand = document.querySelector('[data-current-operand]');