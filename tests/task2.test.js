import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { logDay } from "../src/task2";

describe("выводит в консоль день недели заданной даты", () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  test.for([
    ['понедельник', '2025-11-10T10:00:00', 'Понедельник'],
    ['вторник', '2025-11-11T10:00:00', 'Вторник'],
    ['среда', '2025-11-12T10:00:00', 'Среда'],
    ['четверг', '2025-11-13T10:00:00', 'Четверг'],
    ['пятница', '2025-11-14T10:00:00', 'Пятница'],
    ['суббота', '2025-11-15T10:00:00', 'Суббота'],
    ['воскресенье', '2025-11-09T10:00:00', 'Воскресенье'],
  ])("[0.875] работает со всеми днями недели: %s", ([_, isoDate, expected], { annotate }) => {
    annotate(0.125);

    const spy = vi.spyOn(console, 'log')
    
    logDay(new Date(isoDate))
    
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith(expected)
  });
});

describe("использует особый формат для сегодняшнего дня", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  })

  afterEach(() => {
    vi.resetAllMocks()
    vi.useRealTimers();
  })

  test.for([
    ['понедельник', '2025-11-10T10:00:00', 'Сегодня понедельник'],
    ['вторник', '2025-11-11T10:00:00', 'Сегодня вторник'],
    ['среда', '2025-11-12T10:00:00', 'Сегодня среда'],
    ['четверг', '2025-11-13T10:00:00', 'Сегодня четверг'],
    ['пятница', '2025-11-14T10:00:00', 'Сегодня пятница'],
    ['суббота', '2025-11-15T10:00:00', 'Сегодня суббота'],
    ['воскресенье', '2025-11-09T10:00:00', 'Сегодня воскресенье'],
  ])("[0.875] %s", ([_, isoDate, expected], { annotate }) => {
    annotate(0.125);

    const spy = vi.spyOn(console, 'log')

    const date = new Date(isoDate)
    vi.setSystemTime(date);

    logDay(date)

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith(expected)
  });
})
