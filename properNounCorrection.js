function properNounCorrection(str){
    const firstLetter = str[0].toUpperCase();
    const restOfWord = str.slice(1).toLowerCase();
    return firstLetter.concat(restOfWord)
}

console.log(properNounCorrection('pARIS')) //Pairs
console.log(properNounCorrection('John')) //John

