function allLongestStrings(arr){
    let longestLen=0
    for(let i=0; i<arr.length; i++){
        longestLen < arr[i].length ? longestLen=arr[i].length : longestLen
    } 
   
    res=[]
    arr.forEach((val)=>{
        if (val.length===longestLen){
            res.push(val)
        }
    })

    return res

}

console.log(allLongestStrings(['abc','abc','bbg','byt']))