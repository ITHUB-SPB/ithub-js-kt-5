/**
 * @returns {number} Округленное количество часов
 *
 * @description Функция вычисляет количество часов
 * с 1970 года и возвращает округленное по правилам
 * математики значение
 *
 * @example
 * console.log(getUnixHours()) // 489780
 */
export function getUnixHours() {
    const millisecondsSince1970 = Date.now()
    const hoursSince1970 = millisecondsSince1970 / (1000 * 60 * 60)
    return Math.round(hoursSince1970)
}
