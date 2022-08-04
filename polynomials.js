let A = [ 2, 5, 3]
let B = [6, 2, 4]
let n = 3
let p = []
function mult(){
	for(let i = 0; i <= (2 * n - 2); i++){
		console.log(i)
		p[i] = 0
	}
	for(let i = 0; i <= n - 1; i++){
		for(let j = 0; j <= n -1; j++){
			p[i + j] =  p[i + j] + A[i] * B[j]
		}
	}
}
mult()

console.log(p)