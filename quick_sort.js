var sortList = function(head){
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
        
    }