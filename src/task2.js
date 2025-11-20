/**
 * @param {String} isoDate - Дата в формате ISO
 *
 * @returns {Boolean}
 *
 * @description Функция принимает на вход дату в формате
 * ISO-строки и определяет, является ли год этой даты
 * високосным (кратен 4 будучи не кратным 100, либо кратен 400)
 *
 * @example
 * const date = '2012-07-02T00:00:00.000+03:00'
 * console.log(isLeapDate(date)) // true
 *
 */
export function isLeapDate(isoDate) {
    const date = new Date(isoDate)
    const year = date.getFullYear()
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true
    }
    return false
}
