function matrixElementSum(matrix){
   let priceTotal =0;
   const bannedIndex = []

   for (let i =0; i< matrix.length; i++){
       for (let j =0; j< matrix[i].length; j++){
           if (matrix[i][j]==0){
                bannedIndex.push(j) 
                
           //if index includes j or not , if not returns...
           }if (!bannedIndex.includes(j)){
               priceTotal+=matrix[i][j]
           }
       }
   }
   return priceTotal;
}
console.log(matrixElementSum(
    [[0,1,1,2],
     [0,5,0,0],
     [2,0,3,3]]
))