function sortByHeight(arr){
    const arr2 = arr.filter((ele)=> ele!==-1).sort((a,b)=> a-b)

    let indexVal = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i] !==-1){
            arr[i] = arr2[indexVal]
            indexVal++;
        }
    }
    return arr
}
console.log(sortByHeight([-1,150,190,170,-1,-1,160,180]))