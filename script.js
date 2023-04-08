//TASK 1
//====================================================
// function isPrimitive(object) {
// 	return object == null ||
// 		typeof object == 'number' ||
// 		typeof object == 'bigint' ||
// 		typeof object == 'symbol' ||
// 		typeof object == 'string' ||
// 		typeof object == 'boolean'
// }

// function isArray(object) {
// 	return Array.isArray(object)
// }

// function isObject(object) {
// 	return object != null && typeof object == 'object'
// }

// function deepCopy(object) {
// 	if (isPrimitive(object)) {
// 		return object
// 	} else if (isArray(object)) {
// 		return object.map((item) => {
// 			return deepCopy(item)
// 		})
// 	} else if (isObject(object)) {
// 		let result = {}
// 		for (let i in object) {
// 			result[i] = deepCopy(object[i])
// 		}
// 		return result
// 	}
// }

// function makeDeepCopy(object) {
// 	if (!isObject(object)) {
// 		throw new Error()
// 	}
// 	return deepCopy(object)
// }

//TASK 2
//====================================================
function selectFromInterval(...param) {
	if (param.length < 3) {
		throw new Error()
	}
	if (!Array.isArray(param[0]) || param[0].length < 1 || param[0].some(item => !Number.isInteger(item) || !Number.isFinite(item))) {
		throw new Error()
	}
	let interval = param.slice(1).sort((a, b) => a - b)
	if (interval.some(item => !Number.isInteger(item) || !Number.isFinite(item))) {
		throw new Error()
	}
	return param[0].filter((item) => item >= interval[0] & item <= interval[1])
}
//TASK 3
//====================================================      