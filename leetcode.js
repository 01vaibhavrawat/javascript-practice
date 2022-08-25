/*//insert position
var searchInsert = function(na, t) {
          let l = 0;
          let r = na.length - 1;
    while(r>l){
         var m = Math.floor((r+l)/2);
         console.log(l, r, m);
        if(t === na[m]){
            return m;
        }else if( t > na[m]){
            l = m + 1;
            if(!r>=l) return [m,1];
        }else{
            r = m - 1;
            if(!r>=l) return [m, -1];
        }
              }
    }
console.log(searchInsert([2, 3, 4, 6, 9], 5))*/

/*var rotate = function(nums, k) {
        k %= nums.length;
    let temp = nums.splice(nums.length - k, k);
    nums.unshift(...temp,);
    return nums;
};

console.log(rotate([1,2], 5));*/

var moveZeroes = function(nums){
    console.log("start")
    let l = nums.length;
    let n = l - 1;
    let c = 0;
  for(let i=n; i>=c; i--){
    console.log('a', i)
      if(nums[i]==0){
          nums.push(0);
          console.log(nums,'sahi ha')

      }else{
          nums.unshift(nums[i]);
          console.log(nums, 'hi')
          i++;
          l++;
          c++;
      }
  }
    console.log(nums, c, l);
    nums.splice(c, l-cl);
    return nums;
};
console.log(moveZeroes([0,1,0,3,12]));
