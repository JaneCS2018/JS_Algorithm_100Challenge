function alternatingSum(arr){
    let evenSum=0;
    let oddSum=0;
    
    if (!arr) return undefined;
    arr.forEach((element, index) => {
        if (index%2===0){
            evenSum+=element
        }else{
            oddSum+=element
        }
       
    });
   return [evenSum, oddSum]
}

console.log(alternatingSum([50,60,60,45,70]))