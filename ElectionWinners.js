function electionWinners(votes, k){
    let isTheRunning = 0;
    const mostVotes = Math.max(...votes)
    const sortedVotes = votes.sort((a,b)=> b-a)

    if(sortedVotes[0]!==sortedVotes[1] && k===0 ) return 1;

    votes.forEach(element => {
        //only count the number that surpass the most votes
        if ((mostVotes-element)<k){
            isTheRunning++
        }
    });

    return isTheRunning
}

console.log(electionWinners([2,3,5,2], 3))
