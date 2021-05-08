function firstDuplicate(arr){
    const firstDup = {}

    for (let item of arr){
        if (firstDup.hasOwnProperty(item)){
            return item
        }
        firstDup[item] = item
    }
    return -1;
}

console.log(firstDuplicate([2,1,3,5,3,2]))
console.log(firstDuplicate([2,4,3,5,1]))