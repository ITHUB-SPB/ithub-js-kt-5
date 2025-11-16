import { describe, test, expect } from "vitest";
import { isLeapDate } from "../src/task2";

describe("проверяет, високосный ли год у даты в ISO-формате", () => {
  test("корректно определяет високосный год", ({ annotate }) => {
    annotate(0.5);
    expect(isLeapDate("2012-07-02T00:00:00.000+03:00")).toBe(true);
  });

  test("корректно определяет обычный год", ({ annotate }) => {
    annotate(0.5);
    expect(isLeapDate("2014-07-02T00:00:00.000+03:00")).toBe(false);
  });

  test("работает для годов, кратных 100 но не кратных 400", ({ annotate }) => {
    annotate(0.5);
    expect(isLeapDate("2100-07-02T00:00:00.000+03:00")).toBe(false);
  });

  test("работает для годов, кратных 400", ({ annotate }) => {
    annotate(0.5);
    expect(isLeapDate("2000-07-02T00:00:00.000+03:00")).toBe(true);
  });
})