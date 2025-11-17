import { test, expect, vi, describe, assert } from "vitest";
import { validateEmails } from "../src/task4";


describe("функция validateEmails", () => {
  test("[1.5] работает на базовых случаях", ({ annotate }) => {
    annotate(1.5)

    const emails = ['top@dot.com', 'abra@gmailcom', 'pot.mail.ru', 'grek@pro.pro']
    const expected = { "top@dot.com": true, "abra@gmailcom": false , "pot.mail.ru": false , "grek@pro.pro": true }

    assert.deepEqual(validateEmails(emails), expected)
  })

  test("[0.5] использует map либо reduce", ({ annotate }) => {
    annotate(0.5)

    const emails = ['top@dot.com', 'abra@gmailcom']

    const spyMap = vi.spyOn(emails, "map").mockImplementation(() => {})
    const spyReduce = vi.spyOn(emails, "reduce").mockImplementation(() => {})

    validateEmails(emails)

    expect(spyMap.mock.calls.length + spyReduce.mock.calls.length).toBeGreaterThanOrEqual(1)
  })

  test("[0.5] не модифицирует исходные данные", ({ annotate }) => {
    annotate(0.5)

    const emails = ['top@dot.com', 'abra@gmailcom']
    const expected = [...emails]

    validateEmails(names)

    assert.deepEqual(emails, expected)
  })
})