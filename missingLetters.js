function missingLetters(str){
    const alphabet='abcdefghijklmnopqrstuvwxyz'
    const alphabet_split = alphabet.split('')
    const arr=str.split('')

    if(arr[0]!=='a') return undefined;

    for(let i=0; i<arr.length; i++){
        if (arr[i]!==alphabet_split[i]) return alphabet_split[i]
    }
}

console.log(missingLetters('abce'))
