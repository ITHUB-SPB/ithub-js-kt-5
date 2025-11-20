/**
 * @param {String} date - Дата в виде строки
 * @returns {String} - Строка с указанием формата даты
 *
 * @description Функция принимает на вход дату в строковом
 * отображении и возвращает информацию о ее формате. Постарайтесь
 * использовать регулярные выражения и методы match либо test.
 *
 * @throws Ошибка при некорректном формате даты
 *
 * @example
 * getDateFormat("2022/10/18") // Формат даты европейский
 * getDateFormat("18.10.2022") // Формат даты российский
 * getDateFormat("18.10/22")   // Error: Некорректный формат даты
 */
export function getDateFormat(date) {
    const europeanFormat = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/
    const russianFormat = /^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/

    if (europeanFormat.test(date)) {
        return 'Формат даты европейский'
    } else if (russianFormat.test(date)) {
        return 'Формат даты российский'
    } else {
        throw new Error('Некорректный формат даты')
    }
}
