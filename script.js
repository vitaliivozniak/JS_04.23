//TASK 1
//====================================================
function curry(func) {
	return function curried(...args) {
		if (args.length >= func.length) {
			return func.apply(this, args)
		}
		return function (...newaAgs) {
			return curried.apply(this, args.concat(newaAgs))
		}
	}
}

//TASK 2
//====================================================
//TASK 3
//====================================================



//====================================================
