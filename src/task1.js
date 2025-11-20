/**
 * @returns {Number} Число дней, округленное по правилам математики
 *
 * @description Функция возвращает округленное число дней с начала
 * 2000 года до текущего момента времени
 *
 * @example
 * console.log(daysFromMillenium()) // 7638
 */
export function daysFromMillenium() {
    const date = new Date()
    const defaultDate = new Date(2000, 0, 1, 0, 0)
    const result = date - defaultDate
    return Math.round(result / 1000 / (3600 * 24))
}
