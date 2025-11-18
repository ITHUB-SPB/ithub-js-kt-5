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
	const formats = {
		"европейский": /^(\d{4})\/(\d{2})\/(\d{2})$/,
		"российский": /^(\d{2})\.(\d{2})\.(\d{4})$/
	};

	for (const [format, regex] of Object.entries(formats)) {
		const match = date.match(regex)
		if (match) {
			const month = parseInt(match[2], 10)

			if (month < 1 || month > 12) {
				throw new Error("Некорректный формат даты")
			}

			return `Формат даты ${format}`
		}
	}

	throw new Error("Некорректный формат даты")
}
