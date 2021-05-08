function uniqueDigitProducts(arr){
    let res = []
    for (let i = 0; i< arr.length; i++){
        let len = arr[i].toString().length
        if (len===1){
            res.push(arr[i])
        }
        if (len>1){
            let str_arr= arr[i].toString().split('')
            let num =1;
            str_arr.forEach(ele => {
                num *=parseInt(ele)
            });
            res.push(num)

        }
    }
    let s = new Set(res)
    return s.size
}

console.log(uniqueDigitProducts([2,8,121,42,222,23]))