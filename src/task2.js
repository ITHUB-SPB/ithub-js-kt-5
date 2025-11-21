/**
 * @param {Date} date - Объект даты
 * @returns {String} День недели
 *
 * @description Функция получает на вход объект даты и выводит
 * в консоль день недели (понедельник, вторник и т.п.). Если этот
 * день - сегодня, формат меняется на "Сегодня понедельник" и т.п.
 *
 * @example
 * logDate(new Date('2022-10-18')) // Вторник
 * logDate(new Date()) // Сегодня вторник
 */
export function logDay(date) {
    const daysOfWeek = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ]

    const dayIndex = date.getDay()
    const dayName = daysOfWeek[dayIndex]

    const today = new Date()
    const isToday = date.toDateString() === today.toDateString()

    if (isToday) {
        console.log(`Сегодня ${dayName.toLowerCase()}`)
    } else {
        console.log(dayName)
    }
}
