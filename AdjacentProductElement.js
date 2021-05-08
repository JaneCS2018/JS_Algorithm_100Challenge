function AdjacentProductElement(arr){
   const total = arr[0]*arr[1]
   let largestSum =0
   for (let i=1; i<arr.length-1; i++){
       largestSum =arr[i]*arr[i+1]
       largestSum <total ? largestSum  = total : arr[i]*arr[i+1]
   }
   return largestSum;
   
}

console.log(AdjacentProductElement([3,6,-2,-5,7,7]))
