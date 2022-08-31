let input = `5
800
3
299
301
300`;

input = input.split('\n');
for(let x in input){
	input[x] = parseInt(input[x]);
}
let len = input.length;
for(let i=1; i<len; i++){
	let o3 = input[i] - 300;
	if(o3<1){
		console.log(3000);
	}else{
		console.log(3000 + o3*10);
	}
}