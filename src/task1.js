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
    const original = new Date('2000-01-01')
    const current = new Date()
    return Math.round((current - original) / (24 * 3600 * 1000))
}
