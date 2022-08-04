function _conquer(left, right){
	let sorted = []
	while(left.length && right.length){
	sorted.push(left[0] > right[0] ? right.shift() : left.shift())
	}

	while(left.length){
		sorted.push(left.shift())
	}

	while(right.length){
		sorted.push(right.shift())
	}

	return sorted
}

function devide(array){
	if(array.length < 2) return array

	mid = Math.floor(array.length / 2)
	const l = array.slice(0, mid)
	const r = array.slice(mid, array.length)
	const sl = devide(l)
	const sr = devide(r)

	return _conquer(sl, sr)
}

console.log(devide([7, 2, 4, 8, 9, 1, 3, 5, 6]))