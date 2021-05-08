function arrayConversion(arr){
    let isOdd=true;

    while(arr.length!==1){
        arr=sumProduct(arr, isOdd)
        isOdd =!isOdd
    }
    return arr[0]
}

function sumProduct(num, isOdd){
    let res=[]
    if(isOdd){
        for(let i=0; i<num.length; i+=2){
            res.push(num[i]+ num[i+1])
        }
    }else{
        for(let i=0; i<num.length; i+=2){
            res.push(num[i]* num[i+1])
        }
    }
    return res

}

console.log(arrayConversion([1,2,3,4,5,6,7,8]))