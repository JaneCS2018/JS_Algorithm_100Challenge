function htmlEndTagByStartTag(str){
    const str_l = str.split(' ')
    let arr = str_l[0].split('')
    arr=arr.slice(1)

    let endTag='</'
    for(let i=0; i< arr.length; i++){
        endTag+=arr[i]
    }

    endTag=endTag[endTag.length-1]==='>'? endTag: endTag+='>'
    //remember to return 
    return endTag
}


console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))