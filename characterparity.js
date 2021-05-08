function characterParity(str){
    const res = parseInt(str)
    return isNaN(res) ? 'not a digit' : res%2===0? 'even':'odd'
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('errwe'))