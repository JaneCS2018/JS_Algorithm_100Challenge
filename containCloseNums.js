function containsCloseNums(nums, k){
   for (let i=0; i<nums.length; i++){
       for (let j =0; j<nums.length; j++){
           if (i!==j){
               if (nums[i]===nums[j]){
                   if (Math.abs(j-i)<= k){
                       return true
                   }
               }
           }
       }
   }
   return false;
}