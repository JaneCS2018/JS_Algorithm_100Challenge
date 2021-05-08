function containDuplicates (arr){
    const s = new Set(arr)
   return s.size === arr.length
}

console.log(containDuplicates([1,2,3,1])) //false
console.log(containDuplicates([3,1])) //true
