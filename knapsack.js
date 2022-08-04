w = [4, 3, 2, 9]
v = [9, 2, 8, 8]
W = 14

let mvw = 0
let bi = 0

function bif(){
	for(let x in w){
		x = parseInt(x)
		if (w[x] > 0){
			if((v[x]/w[x]) > mvw){
				mvw = v[x] / w[x]
				bi = x
				console.log(`mia ${bi} hu`)
			}
		}
	}
return bi
}

let amounts = []
let tv = 0