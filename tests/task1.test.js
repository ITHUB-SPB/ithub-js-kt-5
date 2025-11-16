import { expect, test, describe, vi, beforeEach, afterEach } from "vitest";
import { daysFromMillenium } from "../src/task1";


describe("возвращает округленное число дней с начала 2000 года", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  })

  afterEach(() => {
    vi.useRealTimers();
  });

  test.for([
    [2025, 10, 16, 14, 52, 9452],
    [2025, 10, 15, 11, 52, 9450],
    [2010, 10, 15, 15, 0, 3972],
  ])("new Date(%i, %i, %i, %i, %i) -> %i", ([year, monthIx, date, hour, minute, expected], {
    annotate,
  }) => {
    annotate(0.5);

    const fakeNow = new Date(year, monthIx, date, hour, minute);
    vi.setSystemTime(fakeNow);

    expect(daysFromMillenium()).toBe(expected);
  });
})
