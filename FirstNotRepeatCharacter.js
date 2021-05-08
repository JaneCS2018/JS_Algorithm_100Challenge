function firstNotRepeating(str){
    let arr= str.split('')
    let obj = {}
    //array is using of to iterate
    for (let val of arr){
        if (!obj[val]){
            obj[val]=1
        }else{
            obj[val]++;
        }
    }

    //obj is not iterable
    for (let val in obj){
        if (obj[val]===1) return val
    }
    return '-'

   
}

console.log(firstNotRepeating('aabdbcc'))
