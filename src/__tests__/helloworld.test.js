
import * as a from '../utils'
import { describe, test, expect, fn } from '../../index'

const originalGetWinner = a.getWinner
a.getWinner = fn((p1, p2) => p2);

const winner = a.thumbWar('Kent C. Dodds', 'Ken Wheeler');

describe({
    '#blank': () => {
        test('#test', () => {
            expect(winner).strictEqual('Kent C. Dodds');
        })
    }
})
a.getWinner = originalGetWinner
