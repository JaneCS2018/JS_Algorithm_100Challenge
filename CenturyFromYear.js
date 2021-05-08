function CenturyFromYear(year){
    const century = year/100;

    if(year%100===0){
        return century
    }
    return Math.floor(century) + 1;
}

console.log(CenturyFromYear(1700))
console.log(CenturyFromYear(1905))