//Very Classic
function bishopAndPawn(bishop,pawn){
    const board={
        'a':1,
        'b':2,
        'c':3,
        'd':4,
        'e':5,
        'f':6,
        'g':7,
        'h':8
    }

    let bishopX = board[bishop[0]] //1
    let bishopY = parseInt(bishop[1]) //1
    let pawnX = board[pawn[0]] 
    let pawnY= parseInt(pawn[1])
 
    //self x + self y  || self x + other Y === self y + other x
    if ((bishopX + bishopY === pawnX + pawnY)||(pawnX + bishopY === pawnY + bishopX)) return true;
    return false
}

console.log(bishopAndPawn('b2','c3'))
