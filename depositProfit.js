function depositProfit(deposit, rate, threshold){
    let year = 0;
    let account = deposit
    
    while(account<threshold){
        account *= (1+rate/100)
        year++
    }
    return year
}

console.log(depositProfit(100, 20, 170))