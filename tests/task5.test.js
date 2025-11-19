import { test, describe, assert } from "vitest";
import { secondOccurenceInterval } from "../src/task5";


describe("функция secondOccurenceInterval", () => {
  test("[0.5] случай отсутствие совпадений", ({ annotate }) => {
    annotate(0.5)

    const text = 'foo'
    const substring = 'bar'
    const expected = null

    assert.deepEqual(secondOccurenceInterval(substring, text), expected)
  })

  test("[0.5] одно совпадение", ({ annotate }) => {
    annotate(0.5)

    const text = 'foobar'
    const substring = 'foo'
    const expected = null

    assert.deepEqual(secondOccurenceInterval(substring, text), expected)
  })

  test("[0.5] два совпадения", ({ annotate }) => {
    annotate(0.5)

    const text = 'foobarfoo'
    const substring = 'foo'
    const expected = {from: 6, to: 8}

    assert.deepEqual(secondOccurenceInterval(substring, text), expected)
  })

  test("[0.5] более двух совпадений", ({ annotate }) => {
    annotate(0.5)

    const text = 'foofoofoo'
    const substring = 'foo'
    const expected = {from: 3, to: 5}

    assert.deepEqual(secondOccurenceInterval(substring, text), expected)
  })
})