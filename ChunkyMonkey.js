//Very smart
function chunkyMonkey(arr, num){
   const nested = [];
   let count =0;
   while(count < arr.length){
       nested.push(arr.slice(count, count+=num));
   }
   return nested;
}

console.log(chunkyMonkey([0,1,2,3,4,5], 3))