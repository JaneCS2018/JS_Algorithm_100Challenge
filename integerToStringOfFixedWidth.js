function integerToStringOfFixedWidth(num, width){
    let str = num.toString()
    if (str.length>=width) return str.slice(str.length-width)

    let res = str.split('')
    let k = width-res.length
    for (let i=0; i< k; i++){
        res.unshift(0)
    }
    return res.join('')
}

console.log(integerToStringOfFixedWidth(1234, 7))