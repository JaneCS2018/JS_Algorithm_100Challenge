function total(...num){
    let res=0
    num.forEach((val)=> res+=val)
    return res
}

console.log(total(1,3,3))