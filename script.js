class Calculator {
	#previosOperand = ''
	#newOperand = ''
	#operator = ''

	constructor(formValue) {
		this.formValue = formValue
	}

	appendNumber(number) {
		const isOnePoint = number === '.' && this.#newOperand.includes('.')
		const isFirstPoint = number === '.' && this.#newOperand === ''


		if (isOnePoint) {
			return
		}
		if (isFirstPoint) {
			return
		}

		this.#newOperand = this.#newOperand.toString() + number.toString()
	}

	appendOperator(operator) {
		const isEmptyOperand = this.#newOperand === ''
		if (isEmptyOperand) {
			return
		}
		if (this.#previosOperand != '') {
			calculator.mathematicCompute()
			calculator.updateView()
		}
		if (this.formValue.value.includes('Error')) {
			return
		} else {
			this.#previosOperand = this.#newOperand
			this.#operator = operator
			this.#newOperand = ''
		}
	}


	mathematicCompute() {
		const prevNumber = parseFloat(this.#previosOperand)
		const newNumber = parseFloat(this.#newOperand)
		const notValidNumbers = isNaN(prevNumber) || isNaN(newNumber)

		let operationResult

		if (notValidNumbers) {
			this.#newOperand = 'Error'
		}

		switch (this.#operator) {
			case '+':
				operationResult = prevNumber + newNumber
				break

			case '-':
				operationResult = prevNumber - newNumber
				break

			case '*':
				operationResult = prevNumber * newNumber
				break

			case '/':
				operationResult = prevNumber / newNumber
				break

			default:
				return
		}

		this.#newOperand = Number.isFinite(operationResult) ? this.mathRound(operationResult) : 'Error'
		this.#operator = ''
		this.#previosOperand = ''

	}

	changeAppendNumber(operation) {
		const isEmptyOperand = this.#newOperand === ''
		const notEmptyOperand = this.#newOperand !== ''
		const newNumber = parseFloat(this.#newOperand)
		const notValidNumber = isNaN(newNumber)

		let operationResult

		if (isEmptyOperand) {
			return
		}

		if (notValidNumber) {
			this.#newOperand = 'Error'
		}

		if (operation === '±') {
			operationResult = -newNumber
		} else {
			return

		}


		operationResult = Number.isFinite(operationResult) ? this.mathRound(operationResult) : 'Error'
		notEmptyOperand ? this.#newOperand = operationResult : this.#previosOperand = operationResult
	}

	mathRound(number) {
		return Math.round(number * 100000000) / 100000000
	}


	clear() {
		this.#previosOperand = ''
		this.#newOperand = ''
		this.#operator = ''
	}

	delete() {
		if (this.formValue.value.includes('Error')) {
			calculator.clear()
		} else {
			this.#newOperand = this.#previosOperand + this.#operator + this.#newOperand
			this.#previosOperand = ''
			this.#operator = ''
			this.#newOperand = this.#newOperand.slice(0, this.#newOperand.length - 1)
		}

	}

	updateView() {
		this.formValue.value = this.#previosOperand + this.#operator + this.#newOperand
	}
}

const currentView = document.querySelector('[data-view]')
const keyboard = document.querySelector('.calculator__keyboard')
const calculator = new Calculator(currentView)

keyboard.addEventListener('click', function onclickKey(e) {
	const targetElement = e.target
	const targetElementText = e.target.innerText

	if (targetElement.hasAttribute('data-number')) {
		calculator.appendNumber(targetElementText)
		calculator.updateView()
	}

	if (targetElement.hasAttribute('data-operation')) {
		calculator.appendOperator(targetElementText)
		calculator.updateView()

	}

	if (targetElement.hasAttribute('data-change-number')) {
		calculator.changeAppendNumber(targetElementText)
		calculator.updateView()
	}

	if (targetElement.hasAttribute('data-delete')) {
		calculator.delete()
		calculator.updateView()
	}

	if (targetElement.hasAttribute('data-equal')) {
		calculator.mathematicCompute()
		calculator.updateView()
		calculator.clear()
	}

	if (targetElement.hasAttribute('data-all-clear')) {
		calculator.clear()
		calculator.updateView()
	}
})