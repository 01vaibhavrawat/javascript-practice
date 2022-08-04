let array = [21, 43, 44, 65, 76, 87, 98, 898, 8989, 9998, 9999]
/*function linear(k){
	let low = 0
	let high = array.length - 1
	while(low <= high){
	m = Math.floor((high + low)/2)
	if(array[m] === k){
		return true
	}
	else if(array[m] < k){
		low = m + 1
	}else{
		high = m - 1
	}
}
return false
}
console.log(linear(65))
let iterativeFunction = function (arr, x) {
  
    let start=0, end=arr.length-1;
         
    // Iterate while start not meets end
    while (start<=end){
 
        // Find the mid index
        let mid=Math.floor((start + end)/2);
  
        // If element is present at mid, return True
        if (arr[mid]===x) return true;
 
        // Else look in left or right half accordingly
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
  
    return false;
}
console.log(iterativeFunction(array, 9999))*/
