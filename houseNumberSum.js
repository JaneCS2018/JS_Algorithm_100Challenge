function houseNumberSum(arr){
    let total=0;
    for (let val of arr){
        if (val===0)return total
        total+=val
    }

}

console.log(houseNumberSum([5,1,2,3,0,1,5,0,2]))