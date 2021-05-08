function ArrayPreviousLess(arr){
    let res = []

    for (let i=arr.length-1; i>=1; i--){
        let j=i-1
        if (arr[j]<arr[i]){
            res.unshift(arr[j])
        }else{
            res.unshift(-1)
        }
    }
    res.unshift(-1)
    return res

}

console.log(ArrayPreviousLess([3,5,2,4,5]))