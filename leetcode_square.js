var sortedSquares = function(nums) {
	let squares = []
    for(let x of nums){
    	squares.push(x * x)
    }
    return squares.sort(function(a, b){return a - b})
};

console.log(sortedSquares([-7,-3,2,3,11]))