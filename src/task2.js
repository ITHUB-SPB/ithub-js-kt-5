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
	const weekday = date.toLocaleDateString('ru', {weekday: 'long'})
	const now = new Date()
	const result = (now.getFullYear() === date.getFullYear() &&
                    now.getMonth() === date.getMonth() &&
				    now.getDate() === date.getDate()) ? "сегодня " + weekday : weekday
    console.log(capitalizeFirstLetter(result))
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
