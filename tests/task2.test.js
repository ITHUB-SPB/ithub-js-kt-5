import { describe, test, expect, vi } from "vitest";
import { logDay } from "../src/task2";

test('[] корректно обрабатывает сегодняшнюю дату', () => {
    // annotate()

    const mockLog = vi.spyOn(console, 'log').mockImplementation(() => { })
  
    const today = new Date()
    const day = today.toLocaleDateString('ru', { weekday: 'long' })

    logDay(today)

    expect(mockLog).toHaveBeenCalledWith(`Сегодня ${day}`)

    mockLog.mockRestore()
})

test('[] корректно обрабатывает иные даты', () => {
    // annotate()

    const mockLog = vi.spyOn(console, 'log').mockImplementation(() => { })
    
    const date = new Date('2022-10-18')
    logDay(date)

    expect(mockLog).toHaveBeenCalledWith('вторник')

    mockLog.mockRestore()
})

describe('работает со всеми днями недели', () => {
    const weekDates = [
        { date: '2022-06-06', expected: 'понедельник' },
        { date: '2022-06-07', expected: 'вторник' },
        { date: '2022-06-08', expected: 'среда' },
        { date: '2022-06-09', expected: 'четверг' },
        { date: '2022-06-10', expected: 'пятница' },
        { date: '2022-06-11', expected: 'суббота' },
        { date: '2022-06-12', expected: 'воскресенье' },
    ]

    weekDates.forEach(({ date, expected }) => {
        test(`[] корректно выводит день недели: ${expected}`, () => {
            // annotate()

            const mockLog = vi.spyOn(console, 'log').mockImplementation(() => { })

            logDay(new Date(date))

            expect(mockLog).toHaveBeenCalledWith(expected)

            mockLog.mockRestore()
        })
    })
})