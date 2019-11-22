
import * as utils from '../utils'
import { describe, test, expect, mock } from '../../index'

const originalGetWinner = utils.getWinner
utils.getWinner = mock((p1, p2) => p2);

const winner = utils.thumbWar('Kent C. Dodds', 'Ken Wheeler');

describe({
    '#mocking-function_test': () => {
        test('#should return Kent C. Dodds', () => {
            expect(winner).strictEqual('Kent C. Dodds');
        })
    }
})

// => Cleanup
utils.getWinner = originalGetWinner
