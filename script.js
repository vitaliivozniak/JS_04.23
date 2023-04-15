//TASK 1
//====================================================
// function curry(func) {
// 	return function curried(...args) {
// 		if (args.length >= func.length) {
// 			return func.apply(this, args)
// 		}
// 		return function (...newaAgs) {
// 			return curried.apply(this, args.concat(newaAgs))
// 		}
// 	}
// }

//TASK 2
//====================================================
function isNotValid(value) {
	return typeof value != "number" || isNaN(value) || !isFinite(value)
}

class Calculator {
	constructor(firstNumber, secondNumber) {
		if (!firstNumber || !secondNumber || isNotValid(firstNumber) || isNotValid(secondNumber)) {
			throw new Error()
		}
		this.firstNumber = firstNumber
		this.secondNumber = secondNumber
		this.setX = this.setX.bind(this)
		this.setY = this.setY.bind(this)
		this.getSum = this.getSum.bind(this)
		this.getMul = this.getMul.bind(this)
		this.getSub = this.getSub.bind(this)
		this.getDiv = this.getDiv.bind(this)
	}

	setX(num) {
		if (!num || isNotValid(num)) {
			throw new Error()
		}
		this.firstNumber = num
	}
	setY(num) {
		if (!num || isNotValid(num)) {
			throw new Error()
		}
		this.secondNumber = num
	}
	getSum() {
		return this.firstNumber + this.secondNumber
	}
	getMul() {
		return this.firstNumber * this.secondNumber
	}
	getSub() {
		return Math.abs(this.firstNumber - this.secondNumber)
	}
	getDiv() {
		if (this.secondNumber === 0) {
			throw new Error()
		}
		return this.firstNumber / this.secondNumber
	}
}

//TASK 3
//====================================================