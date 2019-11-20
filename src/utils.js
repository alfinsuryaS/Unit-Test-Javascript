

// => Implementation of assert 
const add = (a, b) => {
    return a + b;
}

// => Implementation of async function
const asyncFunc = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved')
        }, 6000);
    })
}

// => Implementation of mocking
const getWinner = (player1, player2) => {
    const winningNumber = Math.random();
    return winningNumber < 1 / 3 ? player1 : winningNumber < 2 / 3 ? player2 : null;
}

const thumbWar = (player1, player2) => {
    const numberToWin = 2
    let player1Wins = 0
    let player2Wins = 0
    while (player1Wins < numberToWin && player2Wins < numberToWin) {
        const winner = getWinner(player1, player2)
        if (winner === player1) {
            player1Wins++
        } else if (winner === player2) {
            player2Wins++
        }
    }
    return player1Wins > player2Wins ? player1 : player2
}

module.exports = {
    add,
    asyncFunc,
    getWinner,
    thumbWar
}