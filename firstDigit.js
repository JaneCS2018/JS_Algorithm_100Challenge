function firstDigit(str){
    let arr = str.split('')
    
    for (let i=0; i< arr.length; i++){
        if(!isNaN(arr[i])){
            return arr[i]
        }
    }
}

console.log(firstDigit('var_1_Int'))