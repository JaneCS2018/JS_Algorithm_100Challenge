function CircleOfNumbers(n, firstNumber){
    const arr = []
    const halfway = n/2
   
    for (let i=0; i<n; i++){
        arr.push(i)
    }
    const res = firstNumber < halfway ? arr[firstNumber] + halfway : arr[firstNumber]-halfway
    return res
}

console.log(CircleOfNumbers(10,1)) // 7