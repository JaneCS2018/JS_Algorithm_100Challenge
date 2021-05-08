function validTime(time){
    const [hours, minutes] = time.split(':');
    if (parseInt(hours) > 23 || parseInt(hours)<0){
        return false
    }

    if (parseInt(minutes) > 60 || parseInt(minutes)<0){
        return false
    }

    return true
}

console.log(validTime('13:58')) //true
console.log(validTime('25:51')) //false
console.log(validTime('02:76')) //false