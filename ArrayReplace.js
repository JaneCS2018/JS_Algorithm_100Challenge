function arrayReplace(arr, elementToReplace, subsitutueElem){
    arr.forEach((element,index) => {
        if (element===elementToReplace){
            arr[index] = subsitutueElem
        }
    
    });
    return arr
}

console.log(arrayReplace([1,2,1],1,3))