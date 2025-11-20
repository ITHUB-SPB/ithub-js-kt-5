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
  const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
  const dayOfWeek = date.getDay()
  const today = new Date()
  
  if (date.toDateString() === today.toDateString()) {
    console.log('Сегодня ' + days[dayOfWeek])
  } else {
    console.log(days[dayOfWeek].charAt(0).toUpperCase() + days[dayOfWeek].slice(1))
  }
}