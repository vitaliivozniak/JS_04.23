//TASK 1
//====================================================

// function factorialize(num) {
// 	if (num < 0)
// 		return -1
// 	else if (num === 0)
// 		return 1
// 	else {
// 		return (num * factorialize(num - 1))
// 	}
// }


// function isPrime(num) {
// 	for (let i = 2; i <= num; i++) {
// 		if (num % i === 0) {
// 			delimiters.push(i)
// 		}
// 	}
// 	delimiters.sort((a, b) => a - b)
// 	delimiters.reverse()
// 	return delimiters.length === 2
// }


// let i = 0
// let value


// do {
// 	value = Number(prompt('Enter a value'))
// 	if (Number.isInteger(value) & value >= 0 & Number.isFinite(value)) {
// 		i = i + 1
// 	} else {
// 		console.log('Incorrect input!')
// 	}
// } while (i < 1)


// console.log(`Number: ${value}`)


// const factorial = factorialize(value)
// console.log(`Factorial: ${factorial}`)


// console.log(`Square: ${value ** 2}`)

// let delimiters = [1]
// if (value < 2) {
// 	console.log('isPrime: false')
// } else {
// 	console.log(`isPrime: ${isPrime(value)}`)
// }


// console.log(`isEven: ${value % 2 === 0}`)


// if (value === 0) {
// 	console.log(`Delimiters:`)
// } else if (value === 1) {
// 	console.log(`Delimiters: 1`)
// } else {
// 	console.log(`Delimiters: ${delimiters.join(', ')}`)
// }



//TASK 2
//====================================================


let t = 0
let symbols

do {
	symbols = prompt('Enter 1 to 3 symbols without spaces')
	symbols = symbols.trim()

	if (1 <= symbols.length & symbols.length <= 3 & !symbols.includes(' ')) {
		t = t + 1

	} else {
		console.log('Incorrect input!')
	}
} while (t < 1)

let k = 0
let count

do {
	count = Number(prompt('Enter a count'))
	if (Number.isInteger(count) & count > 0 & count < 10 & Number.isFinite(count)) {
		k = k + 1
	} else {
		console.log('Incorrect input!')
	}
} while (k < 1)


let result = ''


for (let i = 1; i <= count; i++) {
	for (let c = 1; c <= count; c++) {
		result = result + ' ' + symbols
	}
	result = result + '\n'
}
console.log(result)
