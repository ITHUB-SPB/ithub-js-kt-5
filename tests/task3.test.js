import { test, expect, vi, describe, assert } from "vitest";
import { getDateFormat } from "../src/task3";


describe("возвращает информацию о формате даты", () => {
  test.for([
    "2022/10/18", "2022/12/10"
  ])("[1] определяет европейский формат", (dateString, { annotate }) => {
    annotate(0.5)

    expect(getDateFormat(dateString)).toBe("Формат даты европейский")
  })

  test.for([
    "18.10.2022", "10.12.2022"
  ])("[1] определяет российский формат", (dateString, { annotate }) => {
    annotate(0.5)

    expect(getDateFormat(dateString)).toBe("Формат даты российский")
  })

  test.for([
    "10.14.2022", "2022/18/10", "1.8.2022" 
  ])("[0.75] определяет некорректный формат", (dateString, { annotate }) => {
    annotate(0.25)

    expect(() => getDateFormat(dateString)).throws("Формат даты российский")
  })
})
