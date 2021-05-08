function alphabeticShift(str){
   let arr= str.split('')
    let res = []
    arr.forEach(val => {
        if (val!=='z'){
            let index=val.toLowerCase().charCodeAt()+1 //LookUp ASCII code
            let newChar= String.fromCharCode(index)
            res.push(newChar)
        }
        if (val==='z') res.push('a')
    });
    return res.join('')
}

console.log(alphabeticShift('zbc'))
