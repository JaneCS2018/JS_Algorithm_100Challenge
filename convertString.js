function convertString(s,t){
    let word = '';
    let tIndex = 0;


    for (let i = 0; i<s.length; i++){
        //if s[i] !==t[tIndex] ---> it means no character matches t ---> return false
        if (s[i]===t[tIndex]){
            word = word.concat(s[i])
            tIndex++;
        }
        if (t===word){
            return true
        }
    }
    return false
}

console.log(convertString('addbyca', 'adca'))