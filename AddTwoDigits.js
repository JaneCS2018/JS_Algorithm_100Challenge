function AddTwoDigits(n){
    const nums= n.toString().split('');
    return nums.reduce((a,b)=>{
        return parseInt(a) + parseInt(b)
    })
    //return parseIn(nums[0])+parseIn(nums[1])
}

console.log(AddTwoDigits(37))