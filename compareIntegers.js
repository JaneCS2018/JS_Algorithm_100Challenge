function compareIntegers(a,b){
    return parseInt(a)>parseInt(b) ? 'greater' : parseInt(a)<parseInt(b) ? 'lesser' : 'equal'   
}

console.log(compareIntegers('17', '14'))
