
import { add } from '../helloworld';
import { describe, test, expect, fail } from '../..';


describe({
    'my beverage': () => {
        test('Array Length', () => {
            expect({ 0: 'a', 1: 'b', 2: 'c', 3: 'd' }).toHaveLength(4)
        })
    },

    'my beverage2': () => {
        test('Array Length', () => {
            expect(2).toBe(2);
        })
    }
})