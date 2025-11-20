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
  if (/^\d{4}\/\d{2}\/\d{2}$/.test(date)) {
    const [_, month, day] = date.split('/')
    if (month >= '01' && month <= '12' && day >= '01' && day <= '31') {
      return 'Формат даты европейский'
    }
  }
  
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(date)) {
    const [day, month] = date.split('.')
    if (month >= '01' && month <= '12' && day >= '01' && day <= '31') {
      return 'Формат даты российский'
    }
  }
  
  throw new Error('Некорректный формат даты')
}