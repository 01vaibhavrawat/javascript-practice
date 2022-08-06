const unsorted = [4, 3, 8,6, 3, 6, 4, 4, 2];
let count_array = [];
for(let x in unsorted){
	count_array.push(0);
}
for(let x of unsorted){
	count_array[x]++;
}
let sorted = [];
for(let x in count_array){
	if(count_array[x]){
		for(let i = 0; i < count_array[x]; i++){
			sorted.push(parseInt(x));
		}
	}
}
console.log(sorted);
