function digitDegree(n){
    let count =0;
    let currentNumber = n;

    if (n<=9) return count

    while(true){
        count++;
        currentNumber = getDigit(currentNumber);
        if (currentNumber <=9){
            break;
        }
    }
    //count how many times it convert
    return count;
}

function getDigit(num){
    const nums = num.toString().split('').map((val)=> parseInt(val))
    return nums.reduce((a,b)=> a+b)
}

console.log(digitDegree(5))
console.log(digitDegree(91))