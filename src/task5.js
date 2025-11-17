/**
 * @param {String} infoString - Строка с информацией о возврате
 * @returns {String} Форматированная с учетом локали строка
 *
 * @description Функция, принимающая на вход строку с информацией
 * о возврате книги в одном из указанных форматов и возвращающую
 * строку, отформатированную с учетом локали (en либо ru в
 * зависимости от имени клиента).
 *
 * @example
 * formattedReturn("[2025-11-20T03:28:40] Joseph Mitchem <Wildlife of Australia>")
 * // Joseph Mitchem returned "Wildlife of Australia" at 11/20/2025, 3:28:40 AM
 *
 * formattedReturn("[2025-11-20T12:12:14] Михаил Ландау <Уроки пения>")
 * // Михаил Ландау вернул(а) "Уроки пения" 20.11.2025, 12:12:14
 */

export function formattedReturn(infoString) {
    // Фильтруем строку (выделяем дату, имя и название книги)
    const filteredString = infoString.match(
        /\[(\d+-\d+-\w+:\d+:\d+)\]\s(.*)\s<(.*)>/,
    )

    // Проверка на язык (в данном случае на английский)
    const checkEnglish = new RegExp(/[a-z]/i)

    // Выделяем переменные для удобства
    const name = filteredString[2]
    const date = new Date(filteredString[1])
    const book = filteredString[3]

    // Проверяем на язык и возвращаем строку
    if (checkEnglish.test(name)) {
        return `${name} returned "${book}" at ${date.toLocaleString('en')}`
    } else {
        return `${name} вернул(а) "${book}" ${date.toLocaleString('ru')}`
    }
}
