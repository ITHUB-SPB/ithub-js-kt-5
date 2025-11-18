/**
 * @param {String} date - Дата в виде строки
 * @returns {String} - Строка с указанием формата даты
 *
 * @description Функция принимает на вход дату в строковом
 * отображении и возвращает информацию о ее формате. Постарайтесь
 * использовать регулярные выражения и методы `match` либо `test`.
 * 
 * @throws Ошибка при некорректном формате даты
 *
 * @example
 * getDateFormat("2022/10/18") // Формат даты европейский
 * getDateFormat("18.10.2022") // Формат даты российский
 * getDateFormat("18.10/22")   // Error: Некорректный формат даты
 */
export function getDateFormat(date) {
    const euFormat = /^(\d{4})\/(\d{2})\/(\d{2})$/
	const ruFormat = /^(\d{2})\.(\d{2})\.(\d{4})$/

	let match, format, year, month, day

	if (match = date.match(euFormat)) {
		[, year, month, day] = match
		format = "европейский"
	} else if (match = date.match(ruFormat)) {
		[, year, month, day] = match
		format = "российский"
	} else {
		throw new Error("Некорректный формат даты")
	}

	year = parseInt(year, 10)
	month = parseInt(month, 10)
	day = parseInt(day, 10)

	if (month < 1 || month > 12) {
		throw new Error("Некорректный формат даты")
	}
	
	return "Формат даты " + format
}
