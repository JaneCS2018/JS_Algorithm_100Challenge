function maxAdjacentDiffernce(arr){
    //the first pair
    let maxDiff = Math.abs(arr[1]-arr[0])

    //Iterate through the array
    for(let i=1; i<arr.length; i++){
        let diff = Math.abs(arr[i]-arr[i-1])
        maxDiff = diff>maxDiff? diff : maxDiff
    }
    return maxDiff
}

console.log(maxAdjacentDiffernce([2,4,1,0]))


