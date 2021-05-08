function avoidObstacles(arr){
    arr = arr.sort((a,b)=> a-b)
    let largest = arr[arr.length-1]
    //every method 
    for(let i=1; i<=largest+1; i++){
       if(arr.every((val)=> val % i !==0 )){
           return i
       }    
    }
}

console.log(avoidObstacles([5,3,6,7,9]))