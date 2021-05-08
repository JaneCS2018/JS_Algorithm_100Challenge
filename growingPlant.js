function growingPlant(upSpeed, downSpeed, dheight){
   return (dheight-downSpeed)/(upSpeed-downSpeed) 
}

console.log(growingPlant(100,10,910))