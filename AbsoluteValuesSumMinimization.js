//return medium value
function AbsoluteValuesSumMinimization(arr){
    let even = arr.length%2===0
    return even ? arr[arr.length/2-1] : arr[Math.floor(arr.length/2)]
}
console.log(AbsoluteValuesSumMinimization([1,4,6]))