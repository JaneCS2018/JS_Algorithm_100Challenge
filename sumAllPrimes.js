function sumAllPrimes(num){
    let primesTotal = 0;

    for (let i=2; i<num; i++){
        for (let j =2; j<=i; j++){
            if (i===j){
                primesTotal+=i; 
            }
            //not a prime number    
            if (i%j===0){
                break
            }
        }
    }
    return primesTotal
}

console.log(sumAllPrimes(10))
console.log(sumAllPrimes(977))

