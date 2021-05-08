function makeArrayConsecutive(arr){
    let arr_sorted=arr.sort((a,b)=> a-b)
    let count=0;
    let min = arr_sorted[0]
    let max = arr_sorted[arr_sorted.length-1]
    //Use max as the last value
    for (let i=min; i< max; i++){
        if (!arr.includes(i)){
            count++
        }
    }
    return count
}

console.log(makeArrayConsecutive([6,2,3,8]))