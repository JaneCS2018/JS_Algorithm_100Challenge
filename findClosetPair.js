function findClosetPair(arr, target){
    let distance = Infinity;
 
    for(let i=0; i<arr.length; i++){
        for (let j = i+1; j < arr.length-1; j++){
            let sum = arr[i]+ arr[j]
            if (sum===target){
                distance=Math.min(distance, j-i)
            }
        }
    }
    return distance===Infinity ? -1: distance
}

console.log(findClosetPair([1,0,2,4,3,0], 5))
console.log(findClosetPair([2,3,7], 8))
console.log(findClosetPair([2,10,12], 3))