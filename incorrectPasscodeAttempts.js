function incorrectPasscodeAttempts(pass, attempts){
    let fail = 0;
    for (let val of attempts){
        fail = val===pass? 0 : fail++
        if (fail===10) return true;
    }

    return false;

}

console.log(incorrectPasscodeAttempts('1111', ['1111','2222','3333','4444','1111']))