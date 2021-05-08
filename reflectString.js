//Successfully run
function reflectString(str){
    const letters ='abcdefghijklmnopqrstuvwxyz'
    const list = letters.split('')

    const arr = str.split('')
    let res=''

    for(let i=0; i< arr.length; i++){
        let index=list.indexOf(arr[i])
        res+=list[list.length-index-1]
    }
    return res
}

console.log(reflectString('name'))