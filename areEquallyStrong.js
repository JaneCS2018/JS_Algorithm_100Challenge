function areEquallyStrong(yourLeft, yourRight, friendLeft, friendRight){
    const yourStrongest = yourLeft<yourRight ? yourRight : yourLeft
    const yourWeakest   = yourLeft<yourRight ? yourLeft : yourRight
    const friendStrongest = friendLeft < friendRight ? friendRight : friendLeft
    const friendWeakest = friendLeft < friendRight ? friendLeft : friendRight

    return yourStrongest===friendStrongest && yourWeakest ===friendWeakest
}

console.log(areEquallyStrong(10,15,15,8))