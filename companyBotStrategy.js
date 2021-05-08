function companyBotStrategy(trainingData){
    let time =0;
    let correctiveness = 0;

    trainingData.forEach((data)=>{
        if (data[1]===1){
            time +=data[0]
            correctiveness +=data[1]
        }
    })
    return time / correctiveness || 0;
}

console.log(companyBotStrategy([[3,1], [6,1], [4,1], [5,1]])) //4.5
