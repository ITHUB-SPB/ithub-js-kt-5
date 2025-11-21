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
    const europeanFormat = /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/
    const russianFormat = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/

    const euMatch = date.match(europeanFormat)
    if (euMatch) {
        const [, year, month, day] = euMatch
        if (isValidDate(parseInt(month), parseInt(day))) {
            return 'Формат даты европейский'
        }
    }

    const ruMatch = date.match(russianFormat)
    if (ruMatch) {
        const [, day, month, year] = ruMatch
        if (isValidDate(parseInt(month), parseInt(day))) {
            return 'Формат даты российский'
        }
    }

    throw new Error('Некорректный формат даты')
}

function isValidDate(month, day) {
    return month >= 1 && month <= 12 && day >= 1 && day <= 31
}
