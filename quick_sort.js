function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};

function quickSortRecursive(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSortRecursive(arr, start, index - 1);
    quickSortRecursive(arr, index + 1, end);
}

array = [7, -2, 4, 1, 6, 5, 0, -4, 2, 2, 2, -4]
quickSortRecursive(array, 0, array.length - 1)

console.log(array)

/*function partition(array, low, high) {
    let i = low;
    let p = array[high];
    for (let j = 0; j < high; j++) {
        if (array[j] < p && i < high) {
            [array[j], array[i]] = [array[i], array[j]]

            i++;
        }
    }
    [array[i], array[high]] = [array[high], array[i]]
    return i;
}

function quickSort(array, low, high) {
    if (low >= high) {
    }
    let pi = partition(array, low, high);

        quickSort(array, low, pi - 1);
        quickSort(array, pi + 1, high);
}

function main() {
    let array = [3, 5, 1, 2];
    let n = array.length;
    quickSort(array, 0, n - 1);
    return array;
}
console.log(main());*/

/*let arr = [3, 0, 5, 4, 9, 1];
function compare(p){
    for(let i = 0; i < p; i++){
        if(arr[i] < p){
            let spliced = arr.splice(parseInt(x), 1);
            arr.unshift(...spliced);
        }else if(arr[i] > p){
            let spliced = arr.splice(parseInt(x), 1);
            arr.push(...spliced)
        }
    }
    for(let i = p; i < arr.length; i++){
        if(arr[i] < p){
            let spliced = arr.splice(arr[i], 1);
            arr.unshift(...spliced);
        }else if(arr[i] > p){
            let spliced = arr.splice(arr[i], 1);
            arr.push(...spliced)
        }
    }
    return arr.indexOf(p)
}

function quickSort(){
    let ip = compare(0)
    if(ip - 1 == 0 || arr.length - 1 - ip == 0 ){
        return;
    }
    compare(0, ip - 1);
    compare(p + 1, arr.length - 1)
}
quickSort()
console.log(arr);*/



/*var sortList = function(head){
    let low = 0, high = head.lenth -1;
        if(low < high){
            let p = swap(head, low, high);
            
            quicksort(head, low, p);
            quicksort(head, p+1, high);
        }
    return head;
    }

function swap(head, low, high){
        let j = high + 1, i = low - 1;
        while(true){
        let p = head[0];
       do{
           i++;
           
       }while(head[i] < p);
            
        do{
            j--;
            
        }while(head[j] > p);
        
        }
        
        if(i >= j){
            return j;
        }
        
        let temp =  head[i];
        head[i] = head[j];
        head[j] = head[temp];
        
    }*/