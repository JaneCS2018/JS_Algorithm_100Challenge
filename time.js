function time(n){
    let hour = Math.floor(n/60)
    let min = n%60
    let res=hour.toString().split('').concat(min.toString().split(''))
    let total=0
    res.forEach((val)=>total+=parseInt(val))
    return total
}

console.log(time(808))