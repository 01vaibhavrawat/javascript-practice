let input = `100000
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
    }