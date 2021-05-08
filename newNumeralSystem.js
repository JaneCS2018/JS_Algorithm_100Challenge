function newNumberalSystem(str){
    const res = []
    let startCharCode = 65;
    let endCharCode = str.charCodeAt(0);

    while(startCharCode <= endCharCode){
        const numeral = `${String.fromCharCode(startCharCode)} + ${String.fromCharCode(endCharCode)}`
        res.push(numeral)
        startCharCode++;
        endCharCode--;
    }
    return res;
}

console.log(newNumberalSystem('G'))