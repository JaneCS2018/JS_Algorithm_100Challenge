function domainType(arr){
    const domainType = []
    // for(let i = 0; i<arr.length; i++){
    //     const item_list = arr[i].split('.')
    //     const val_last = item_list[item_list.length-1];

    //     if (val_last=='org'){
    //         domainType.push('organization')
    //     }
    //     else if (val_last=='com'){
    //         domainType.push('commercial')
    //     }
    //     else if (val_last=='net'){
    //         domainType.push('network')
    //     }
    //     else if (val_last=='info'){
    //         domainType.push('information')
    //     }
    // }
    arr.forEach((val)=>{
        const val_list = val.split('.')
        //find the last element...
        const val_last = val_list[val_list.length-1];
        if (val_last=='org'){
            domainType.push('organization')
        }
        else if (val_last=='com'){
            domainType.push('commercial')
        }
        else if (val_last=='net'){
            domainType.push('network')
        }
        else if (val_last=='info'){
            domainType.push('information')
        }
        
    })

    return domainType
    
}

console.log(domainType(["en.wiki.org", "aaa.com", "ydsf.net", "adjfka.info"]))