var searchInsert = function(na, t) {
    let l = 0;
    let r = na.length - 1;
    let p = 1;
    while(r >= l){
    var m = Math.floor(l + (r - l)/2);
    if(t === na[m]){
        return m;
    }else if(t > na[m]){
        l = m + 1;
        p = 3;
    }else if(t < na[m]){
        r = m - 1;
        p = 2;
    }
          }

    if(p == 3){
        return m + 1;
    }else if( p == 2){
        return m;
    }else{return false}
};

console.log(searchInsert([1,3,5,6], 7), 'a');