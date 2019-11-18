import { asyncFunc } from '../helloworld'
import { describe, test, expect } from '../../index'

describe({
    'matching cities to foods': () => {
        test('Vienna <3 sausage', () => {
            expect(6).strictEqual(7)
        });
    },
})


describe({
    '#testing-async-function': () => {
        test('Check resolve or not', async () => {
            const result = await asyncFunc();
            expect('resolved').strictEqual(result)
        })
    }
})