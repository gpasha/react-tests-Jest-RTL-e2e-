import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
    test('empty state', () => {
        expect(getCounterValue({})).toBe(0)
    })

    test('Not empty state', () => {
        expect(getCounterValue({
            counter: {
                value: 100
            }
        })).toBe(100)
    })
})