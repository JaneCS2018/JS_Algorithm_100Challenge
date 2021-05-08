function seekAndDestory(arr1, arr2){
  return arr1.filter((ele)=> !arr2.includes(ele))
}

console.log(seekAndDestory([3,5,1,2,2], [2,3,5]))