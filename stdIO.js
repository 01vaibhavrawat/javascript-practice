let input = `2
6
1 2 3 4 5 6
2
1 11
4
1 2 4 6`;
input = input.split('\n');
for(let i=2;i<=input.length;i+=2){
console.log('f')
    let arr = input[i].split(' ');

    for(let x in arr){
    arr[x] = parseInt(arr[x]);
    }

    let len = arr.length;
    let last = arr[len-1];

    let l = 0;
    let j = 0;
    while(j<len){
        arr.splice(0, j)
        console.log(arr)
        const n = arr.indexOf(l+1);
        const n2 = arr.indexOf(l);
        const n3 = arr.indexOf(l-1);
        if(n > -1){
            j = n;
            l++;
        }else if(n2>0){
            j = n2;
        }else if(n3>-1){
            j = n3;
            l--;
        }else{
            console.log('no');
            j = len;
        }
        if(arr[j]==last){
            console.log('YES');
            j = len;
        }
        }
}








/*let input = `100000
6 4 1
8 6 5
7 4 3
9 8 4
18 8 4`
input = input.replace(/\n/g, ' ');
input = input.split(' ')
for(let x in input){
    input[x] = parseInt(input[x]) ;
}
    let output = [];
    for(let x in input){
        if((x%3)==1){
            if((input[x]<=input[parseInt(x) + 1]) && (input[parseInt(x) + 1]>input[parseInt(x) + 2]))
            {
                output.push(1);
            }else if(input[parseInt(x) + 1]<=input[parseInt(x) + 2])
            {
                output.push(-1);
            }else
            {
                let a = parseInt((input[x] - input[parseInt(x) + 1])/(input[parseInt(x) + 1] - input[parseInt(x) + 2]));
                let r = parseInt((input[x] - input[parseInt(x) + 1])%(input[parseInt(x) + 1] - input[parseInt(x) + 2]));
                if(r==0){
                    output.push(2*a+1)
                }else{
                    output.push(2*a+3)
                }
            }

        }
    }
    for(let x of output){
    process.stdout.write(x + "\n"); 
    }*/