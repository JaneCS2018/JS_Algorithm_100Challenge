function commonCharacterCount(s1, s2){
    const s1Chars = s1.split('')
    const s2Chars = s2.split('')
    const s1CharCount = getCharacterList(s1Chars);
    const s2CharCount = getCharacterList(s2Chars);
    let total = 0;

    for (const prop in s1CharCount){
        if (s2CharCount.hasOwnProperty(prop)){
            if (s2CharCount[prop]<s1CharCount[prop]){
                total +=s2CharCount[prop]
            }else{
                total +=s1CharCount[prop]
            }
        }
    }
    return total;
}

function getCharacterList(chars){
    const wordCount = {}
    for (let i=0; i< chars.length; i++){
        //Very interesting hasOwnProperty
       if(wordCount.hasOwnProperty(chars[i])){
           wordCount[chars[i]]++;
       }else{
           wordCount[chars[i]]=1;
       }
       
    }
    return wordCount;
}

console.log(commonCharacterCount('aabcc', 'adcaa')) // 3 --- 3 elements

