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
    const NameWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    const ix = date.getDay()
    const full = NameWeek[ix]
    const today = new Date()
    if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()){
        console.log('Сегодня ' + full.toLowerCase())
    } else{
        console.log(full)
    }
}
