//TASK 1
//====================================================
class Stack {
	#last
	#currentLength
	#maxLength
	#chechLength(len) {
		if (len < 0) {
			this.#currentLength = 0
			throw new Error('Empty stack')
		}
		if (this.#maxLength - len < 0) {
			this.#currentLength--
			throw new Error('Limit exceeded')
		}
	}
	#addElinArr(elem, array) {
		if (elem.prev === null) {
			array.push(elem.val)
		}
		else {
			array.push(elem.val)
			this.#addElinArr(elem.prev, array)
		}
		return array
	}

	constructor(maxlength) {
		this.#last = null
		if (typeof maxlength !== 'number' || !Number.isInteger(maxlength) || isNaN(maxlength) || !isFinite(maxlength)) {
			throw new Error('Invalid limit value')
		}
		else if (maxlength < 0) {
			throw new Error('Invalid limit value')
		}
		else if (typeof maxlength === 'undefined') {
			this.#maxLength = 10
		}
		else {
			this.#maxLength = maxlength
		}
		this.#currentLength = 0
	}

	push(elem) {
		this.#chechLength(++this.#currentLength)
		if (this.#last === null) {
			let newObj = {}
			newObj.val = elem
			newObj.prev = null
			this.#last = newObj
		}
		else {
			let newObj = {}
			newObj.val = elem
			newObj.prev = this.#last
			this.#last = newObj
		}
	}

	pop() {
		this.#chechLength(--this.#currentLength)
		let res = this.#last
		if (this.#last.prev === null) {
			this.#last = null
			return res
		}
		else {
			this.#last = this.#last.prev
			return res
		}
	}

	peek() {
		if (this.#currentLength === 0) {
			return null
		}
		return this.#last.val
	}

	isEmpty() {
		if (this.#currentLength === 0) {
			return true
		}
		return false
	}

	toArray() {
		let arr = []
		if (this.#last === null) {
			return arr
		}
		else {
			arr = this.#addElinArr(this.#last, arr)
		}
		return arr
	}

	static fromIterable(iterable) {
		let stackResult = new Stack()
		if (typeof iterable[Symbol.iterator] === 'undefined') {
			throw new Error('Not iterable')
		}
		else {
			for (const key in iterable) {
				stackResult.push(iterable[key])
			}
		}
		return stackResult
	}
}

//TASK 2
//====================================================
class LinkedList {
	#last = null
	#getFirstElem(object) {
		if (object.prev === null) {
			return object
		}
		return this.#getFirstElem(object.prev)
	}
	#checkItem(object, elem, isEquals) {
		let isEq = isEquals
		let result
		if (object.value === elem || isEq) {
			result = true
		}
		else {
			result = false
		}
		if (object.prev !== null) {
			result = this.#checkItem(object.prev, elem, isEq || result)
		}
		return result || isEq
	}
	#addElinArr(elem, arr) {
		let array = arr
		if (elem.prev === null) {
			array.push(elem.value)
		}
		else {
			array.push(elem.value)
			this.#addElinArr(elem.prev, array)
		}
		return array
	}
	append(elem) {
		if (this.#last === null) {
			let newObject = {}
			newObject.value = elem
			newObject.prev = null
			this.#last = newObject
		}
		else {
			let newObject = {}
			newObject.value = elem
			newObject.prev = this.#last
			this.#last = newObject
		}
	}
	prepend(elem) {
		if (this.#last === null) {
			this.append(elem)
		}
		else {
			let newObj = {}
			newObj.value = elem
			newObj.prev = null
			let firstelement = this.#getFirstElem(this.#last)
			firstelement.prev = newObj
		}
	}
	find(elem) {
		let result
		let isEquals
		if (this.#last === null) {
			return null
		}
		isEquals = this.#last.value === elem
		result = this.#checkItem(this.#last, elem, isEquals)
		result = result || isEquals
		if (result) {
			return elem
		}
		return null
	}
	toArray() {
		let arr = []
		if (this.#last === null) {
			return arr
		}
		else {
			arr = this.#addElinArr(this.#last, arr)
		}
		return arr
	}
	static fromIterable(iterable) {
		let listResult = new LinkedList
		if (typeof iterable[Symbol.iterator] === 'undefined') {
			throw new Error('Not iterable')
		}
		else {
			for (const key in iterable) {
				listResult.append(iterable[key])
			}
		}
		return listResult
	}
}

//TASK 3
//====================================================
class Car {
	#brand = ''
	#model = ''
	#yearOfManufacturing = 1950
	#maxSpeed = 100
	#maxFuelVolume = 20
	#fuelConsumption = 1
	#damage = 1
	#currentFuelVolume = 0
	#isStarted = false
	#mileage = 0
	#health = 100


	get brand() {
		return this.#brand
	}
	set brand(value) {
		if (typeof value != 'string' || value.trim().length < 1 || value.trim().length > 50) {
			throw new Error('Invalid brand name')
		}
		this.#brand = value
	}
	get model() {
		return this.#model
	}
	set model(value) {
		if (typeof value != 'string' || value.trim().length < 1 || value.trim().length > 50) {
			throw new Error('Invalid model name')
		}
		this.#model = value
	}
	get yearOfManufacturing() {
		return this.#yearOfManufacturing
	}
	set yearOfManufacturing(value) {
		if (typeof value != 'number' || !Number.isInteger(value) || isNaN(value) || !isFinite(value) || value < 1950 || value > 2023) {
			throw new Error('Invalid year of manufacturing')
		}
		this.#yearOfManufacturing = value
	}
	get maxSpeed() {
		return this.#maxSpeed
	}
	set maxSpeed(value) {
		if (typeof value != 'number' || !Number.isInteger(value) || isNaN(value) || !isFinite(value) || value < 100 || value > 330) {
			throw new Error('Invalid max speed')
		}
		this.#maxSpeed = value
	}
	get maxFuelVolume() {
		return this.#maxFuelVolume
	}
	set maxFuelVolume(value) {
		if (typeof value != 'number' || !Number.isInteger(value) || isNaN(value) || !isFinite(value) || value < 20 || value > 100) {
			throw new Error('Invalid max fuel volume')
		}
		this.#maxFuelVolume = value
	}
	get fuelConsumption() {
		return this.#fuelConsumption
	}
	set fuelConsumption(value) {
		if (typeof value != 'number' || !Number.isInteger(value) || isNaN(value) || !isFinite(value) || value < 1) {
			throw new Error('Invalid fuel consumption')
		}
		this.#fuelConsumption = value
	}
	get damage() {
		return this.#damage
	}
	set damage(value) {
		if (typeof value != 'number' || !Number.isInteger(value) || isNaN(value) || !isFinite(value) || value < 1 || value > 5) {
			throw new Error('Invalid damage')
		}
		this.#damage = value
	}
	get currentFuelVolume() {
		return this.#currentFuelVolume
	}
	get isStarted() {
		return this.#isStarted
	}
	get health() {
		return this.#health
	}
	get mileage() {
		return this.#mileage
	}
	start() {
		if (this.#isStarted) {
			throw new Error('Car has already started')
		}
		this.#isStarted = true
	}
	shutDownEngine() {
		if (!this.#isStarted) {
			throw new Error('Car hasn\'t started yet')
		}
		this.#isStarted = false
	}
	fillUpGasTank(value) {
		if (typeof value != 'number' || !Number.isInteger(value) || isNaN(value) || !isFinite(value) || value < 1) {
			throw new Error('Invalid fuel amount')
		} else if (this.#maxFuelVolume < this.#currentFuelVolume + value) {
			throw new Error('Too much fuel')
		} else if (this.#isStarted) {
			throw new Error('You have to shut down your car first')
		}
		this.#currentFuelVolume = this.#currentFuelVolume + value
	}
	drive(speed, hours) {
		if (typeof speed != 'number' || !Number.isInteger(speed) || isNaN(speed) || !isFinite(speed) || speed < 1) {
			throw new Error('Invalid speed')
		}
		if (typeof hours != 'number' || !Number.isInteger(hours) || isNaN(hours) || !isFinite(hours) || hours < 1) {
			throw new Error('Invalid duration')
		}
		if (speed > this.#maxSpeed) {
			throw new Error('Car can\'t go this fast')
		}
		if (!this.#isStarted) {
			throw new Error('You have to start your car first')
		}
		let distance = speed * hours
		let loseFluel = distance / 100 * this.#fuelConsumption
		let takenDamage = this.#damage * distance / 100
		if (this.#currentFuelVolume - loseFluel < 0) {
			throw new Error('You don\'t have enough fuel')
		} else if (this.#health - takenDamage < 0) {
			throw new Error('Your car won’t make it')
		}
		this.#currentFuelVolume = this.#currentFuelVolume - loseFluel
		this.#health = this.#health - takenDamage
		this.#mileage = this.#mileage + distance
	}
	repair() {
		if (this.#isStarted) {
			throw new Error('You have to shut down your car first')
		} else if (this.#maxFuelVolume - this.#currentFuelVolume > 0) {
			throw new Error('You have to fill up your gas tank first')
		}
		this.#health = 100
	}
	getFullAmount() {
		if (this.#currentFuelVolume === this.#maxFuelVolume) {
			return 0
		}
		return this.#maxFuelVolume - this.#currentFuelVolume
	}
}