function pigLatin(str){
    let arr=str.split('')
    const vowelRegex = /[aeiou]/

    if (vowelRegex.test(arr[0])){
        return `${str}way`
    }

    while(true){
        if (!vowelRegex.test(arr[0])){
            arr.push(arr.splice(0,1))
        }else{
            break;
        }
    }
    let newStr = arr.join('')+'ay'
    return newStr
}

console.log(pigLatin('blogh'))
console.log(pigLatin('eight'))