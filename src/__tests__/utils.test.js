

import * as utils from '../utils'
import { describe, test, expect, mock } from '../../index'

// => Add Function
describe({
    '#add-function_test': () => {
        test('should return 6', () => {
            const result = utils.add(3, 3)
            expect(result).strictEqual(6)
        });
    },
})

// => Async Function Test
describe({
    '#async-function_test': () => {
        test('should return resolved ', async () => {
            const result = await utils.asyncFunc();
            expect('resolved').strictEqual(result)
        })
    }
})


