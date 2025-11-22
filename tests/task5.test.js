import { test, describe, assert } from 'vitest'
import { secondOccurenceInterval } from '../src/task5'

describe('функция secondOccurenceInterval', () => {
    test('[0.5] случай отсутствие совпадений', ({ annotate }) => {
        annotate(0.5)

        const text = 'i love js'
        const substring = 'goolang'
        const expected = null

        assert.deepEqual(secondOccurenceInterval(substring, text), expected)
    })

    test('[0.5] одно совпадение', ({ annotate }) => {
        annotate(0.5)

        const text = 'Apples are great'
        const substring = 'Apple'
        const expected = null

        assert.deepEqual(secondOccurenceInterval(substring, text), expected)
    })

    test('[0.5] два совпадения', ({ annotate }) => {
        annotate(0.5)

        const text = 'code test code test'
        const substring = 'test'
        const expected = { from: 15, to: 18 }

        assert.deepEqual(secondOccurenceInterval(substring, text), expected)
    })

    test('[0.5] более двух совпадений', ({ annotate }) => {
        annotate(0.5)

        const text = 'aaa bbb aaa ccc aaa'
        const substring = 'aaa'
        const expected = { from: 8, to: 10 }

        assert.deepEqual(secondOccurenceInterval(substring, text), expected)
    })
})
