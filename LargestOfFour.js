function largestOfFour(matrix){
    let res = [];
    for (let i=0; i< matrix.length; i++){
        let val = matrix[i].sort((a,b)=> b-a)
        res.push(val[0])
    }
    return res
}

console.log(largestOfFour([[4,5,1,3], [13,27,18,26], [32,35,37,39], [1000,1001, 857,1]]))
