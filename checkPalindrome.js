function checkPalindrome(str){
    const original_str = str.toLowerCase();
    const new_str = original_str.split('').reverse().join('')
    return original_str===new_str
}

console.log(checkPalindrome('a'))
console.log(checkPalindrome('aabab'))