function AlmostIncreasingSequence(arr){
    let count = 0;

    for (let i=0; i< arr.length; i++){
        if (arr[i-1]>=arr[i]) {
            count++;
            if (arr[i-2]>=arr[i] && arr[i-1]>=arr[i+1]){ //two cases count+=1
                return false;
            }
        }
        
    }
    return count<=1;
}

console.log(AlmostIncreasingSequence([1,4,0,2]))