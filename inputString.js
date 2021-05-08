function inputString(str){
    for (let i=0; i< str.length; i++){
        if (str.slice(i)===str.slice(0,i))return true
    }
    return false
}

console.log(inputString('tandemtandem'))