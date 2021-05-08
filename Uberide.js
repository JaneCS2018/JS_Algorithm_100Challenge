function Uberide(l, fares){
    arr=['UberX','UberXL','UberPlus', 'UberBlack', 'UberSUV']
    let max_index=0
    for (let i=0; i<fares.length; i++){
        if (fares[i]*l <=20){
            max_index=Math.max(i, max_index)
        }
    }
    return arr[max_index]
}

console.log(Uberide(30, [0.3,0.5,0.7,1,1.3]))