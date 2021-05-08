//Method 1
// function differentSymbolsNaive(str){
//     arr= str.split('')
//     let s = new Set(arr)
//     return s.size;
// }

//Method 2
function differentSymbolsNaive(str){
    const obj = {}
    const arr = str.split('')
    arr.forEach((val)=>{
        obj[val]=1
    })
    //Object.keys(obj) ---> key.length...
    return Object.keys(obj).length
}

console.log(differentSymbolsNaive('cabcaz'))