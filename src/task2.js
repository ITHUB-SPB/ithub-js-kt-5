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
    let days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ]

    let todaydays = [
        'Сегодня воскресенье',
        'Сегодня понедельник',
        'Сегодня вторник',
        'Сегодня среда',
        'Сегодня четверг',
        'Сегодня пятница',
        'Сегодня суббота',
    ]
    let today = new Date()
    if (date.toDateString() === today.toDateString())
        console.log(todaydays[today.getDay()])
    else console.log(days[date.getDay()])
}
