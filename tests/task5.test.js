import { test, describe, assert } from 'vitest'
import { secondOccurenceInterval } from '../src/task5'

describe('функция secondOccurenceInterval', () => {
    test('[0.5] случай отсутствие совпадений', ({ annotate }) => {
        annotate(0.5)

        const text = 'df df sa sa sa ra'
        const substring = 'tr'
        const expected = null

        assert.deepEqual(secondOccurenceInterval(substring, text), expected)
    })

    test('[0.5] одно совпадение', ({ annotate }) => {
        annotate(0.5)

        const text = 'df df sa sa sa ra'
        const substring = 'ra'
        const expected = null

        assert.deepEqual(secondOccurenceInterval(substring, text), expected)
    })

    test('[0.5] два совпадения', ({ annotate }) => {
        annotate(0.5)

        const text = 'df df sa sa sa ra'
        const substring = 'df'
        const expected = { from: 3, to: 5 }

        assert.deepEqual(secondOccurenceInterval(substring, text), expected)
    })

    test('[0.5] более двух совпадений', ({ annotate }) => {
        annotate(0.5)

        const text = 'df df sa sa sa ra'
        const substring = 'sa'
        const expected = { from: 9, to: 11 }

        assert.deepEqual(secondOccurenceInterval(substring, text), expected)
    })
})
