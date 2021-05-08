function isCaseInsensitivePalindrome(str){
    const str_lowercase = str.toLowerCase();
    //convert string to list and reverse and join
    const str_rev = str_lowercase.split('').reverse().join('')
    return  str_lowercase === str_rev;
}

console.log(isCaseInsensitivePalindrome('AaBaa'))
console.log(isCaseInsensitivePalindrome('AaBa'))