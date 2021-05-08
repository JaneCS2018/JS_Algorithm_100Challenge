function AreSimilar(a,b){
    if (a.toString()===b.toString()) return true
    let c=[]
    let d =[]
    for (let i = 0; i< a.length; i++){
        if (a[i]!==b[i]){
            c.push(a[i])
            d.push(b[i])
        }
    }
    d=d.reverse()
    if (c.length===2 && (c.toString()===d.toString())){
        return true;
    } 
    return false;
}

console.log(AreSimilar([2,1,3], [1,2,3]))