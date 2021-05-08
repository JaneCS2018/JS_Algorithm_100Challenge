function AddBorder(arr){
    let wall= '*'.repeat(arr[0].length+2)
    let res=[]
 
    for (let i=0; i<arr.length; i++){
        res[i]='*'.concat(arr[i], '*')
    }
    res.unshift(wall)
    res.push(wall)
    return res
}

console.log(AddBorder(['car','tar']))