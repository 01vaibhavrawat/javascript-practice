/*let best = 0

function gcd(a, b){
	for(let i = 0; i < (a + b); i++){
		if((a % i == 0) && (b % i == 0)){
			best = i
		}
	}
	return(best)
}
console.log(gcd(100000000, 50000000))*/
/*function myDesign(a, b){
	let g = Math.max(a, b)
	let l = Math.min(a, b)
	for(let i = l; i >=0; i--){
		if((g % i) == 0){
			return i
		}
	}
}

console.log(myDesign(100000000000, 11111111111))*/
/*
function egcd(a, b){
	if(b == 0) return a
	let r = a % b
	return egcd(b, r)
	
}
console.log(egcd(10000003842038900000, 11111111184093811))*/