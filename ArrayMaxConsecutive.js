//sliding window, Good problem
function ArrayMaxConsecutiveSum(arr, k){
   let max=0
   let sum=0

   for(let i =0; i<k;i++){
       sum+=arr[i]
   }

   for(let i=k; i<arr.length; i++){
       sum+=arr[i]-arr[i-k]
       sum>max ? max=sum : max
   }
   return max
}

console.log(ArrayMaxConsecutiveSum([2,3,5,1,6],3))
