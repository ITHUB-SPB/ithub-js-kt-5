import { expect, test, describe, vi, beforeEach, afterEach } from "vitest";
import { getUnixHours } from "../src/task1";


describe("возвращает округленное число дней с начала 2000 года", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  })

  afterEach(() => {
    vi.useRealTimers();
  });

  test.for([
    [2025, 10, 16, 14, 52, 489804],
    [2010, 10, 15, 10, 10, 358279],
  ])("new Date(%i, %i, %i, %i, %i) -> %i", ([year, monthIx, date, hour, minute, expected], {
    annotate,
  }) => {
    annotate(0.5);

    const fakeNow = new Date(year, monthIx, date, hour, minute);
    vi.setSystemTime(fakeNow);

    expect(getUnixHours()).toBe(expected);
  });
})