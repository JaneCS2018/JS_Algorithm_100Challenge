function FindEmailDomain(str){
    const lastIndex = str.lastIndexOf('@')
    return str.slice(lastIndex+1)
}

console.log(FindEmailDomain('xiangliu2011@gmail.com'))//gmail.com
