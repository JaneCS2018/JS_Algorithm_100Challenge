function incrementalBackups(lastBackUpTime, changes){
   const fileIds=[]

   for (let change of changes){
       const fileBackuptime = change[0]
       const fileId = change[1]
       if (fileBackuptime> lastBackUpTime){
           fileIds.push(fileId)
       }
   }
   fileIds.sort((a,b)=> a-b)
   let s = new Set(fileIds)
   return Array.from(s)
}

console.log(incrementalBackups(461620205, [[461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1]
]))