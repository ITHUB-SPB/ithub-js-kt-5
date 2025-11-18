/**
 * @param {String} substring - Подстрока для поиска
 * @param {String} text - Исходная строка
 *
 * @returns {{from: Number, to: Number} | null}
 *
 * @description Функция принимает на вход подстроку для поиска
 * и исходную строку, служит для нахождения второго вхождения
 * подстроки и возвращает диапазон в виде объекта { from, to }
 * либо null если оно не найдено.
 *
 * @example
 * const text = 'Действие "Создать случайный текст" создает случайные строки текста. В этой статье описаны функциональные возможности действия "Создать случайный...'
 *
 * console.log(secondOccurenceInterval("Создать", text)) // { from: 117, to: 123 }
 * console.log(secondOccurenceInterval("поиск по главе", text)) // null
 */
export function secondOccurenceInterval(substring, text) {
    return
}
