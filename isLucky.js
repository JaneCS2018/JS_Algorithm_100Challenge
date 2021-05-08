function isLucky(num){
    let str=num.toString()
    let half = str.length/2
    let firstHalf = getTotal(str.substring(0, half))
    let secondHalf = getTotal(str.substring(half, str.length))
    return firstHalf === secondHalf
}

function getTotal(str){
   return str.split('').map((val)=> parseInt(val)).reduce((num1, num2)=> num1+num2)
}

console.log(isLucky(1230))