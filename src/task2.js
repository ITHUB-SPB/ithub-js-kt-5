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
    const today = new Date()
    const day = date.toLocaleDateString('ru', { weekday: 'long' })

    if (today.getTime() === date.getTime()) {
        console.log(`Сегодня ${day}`)
    } else {
        console.log(day.replace(day[0], day[0].toUpperCase()))
    }
}
