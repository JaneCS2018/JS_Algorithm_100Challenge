function candies(nperson, mCandies){
  const each = Math.floor(mCandies/nperson);
  return each * nperson
}

console.log(candies(3,10))