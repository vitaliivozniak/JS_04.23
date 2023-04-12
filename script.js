//TASK 1
//====================================================

Array.prototype.customFilter = function (callback, thisArg) {
	let i
	const length = arr.length
	let res = []

	for (i = 0; i < length; i++) {
		if (callback.call(thisArg, arr[i], i, arr)) {
			res.push(arr[i])
		}
	}

	return res
}

Object.keys(Array.prototype).forEach(method => {
	Object.defineProperty(Array.prototype, method, {
		enumerable: false,
	})
})

//TASK 2
//====================================================