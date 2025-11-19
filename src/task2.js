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
    const days = date.toLocaleDateString('ru-RU', { weekday: 'long' })
    const Today = new Date().toDateString() === date.toDateString()

    console.log(
        Today
            ? `Сегодня ${days}`
            : days.charAt(0).toUpperCase() + days.slice(1),
    )
}
