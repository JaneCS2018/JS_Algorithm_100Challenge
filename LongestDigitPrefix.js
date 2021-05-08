function longestDigitsPrefix(str){
    const chars = str.split('');
    let prefix='';

    for (let char of chars){
        const num = parseInt(char)

        if (isNaN(num)){
            break;
        }
        prefix +=char
    }

    return prefix;
}

console.log(longestDigitsPrefix('123aa1'))