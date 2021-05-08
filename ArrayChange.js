function ArrayChange(arr){
    let diff=0
    let count=0
   for (let i=0; i< arr.length; i++){
       if(arr[i-1]>=arr[i]){
            // Check the diff between arr[i-1]+1, arr[i]
            diff = (arr[i-1]+1)-arr[i]
            arr[i]=arr[i-1]+1
            count+=diff 
       }
   }
   return count
}
console.log(ArrayChange([1,1,1]))


