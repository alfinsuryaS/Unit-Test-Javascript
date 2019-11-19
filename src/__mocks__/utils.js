
import { expect } from '../../index'

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


const originalGetWinner = getWinner
getWinner = (p1, p2) => p1;

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler');
expect.strictEqual(winner, 'Kent C. Dodds')

getWinner = originalGetWinner
