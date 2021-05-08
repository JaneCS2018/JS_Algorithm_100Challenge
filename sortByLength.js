function sortByLength(arr){
    //Increase order
    return arr.sort((a,b)=> a.length - b.length)
}

console.log(sortByLength(["abc", "", "aaa", "a", "zz"]))