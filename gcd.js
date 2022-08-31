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

function egcd(a, b){
	if(b == 0) return a
	let r = a % b
	return egcd(b, r)
	
}
x=50, y=100;
let g = egcd(x, y);
let out = 0;

for(let i=1; i<Math.sqrt(g); i++){
	if(g%i==0){
		if(g/i==i){
			out++;
		}else{
			out+=2;
		}
	}
}

console.log(out);