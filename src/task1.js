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
    const date2000 = new Date('2000-01-01')
    const today = new Date()

    const timeDiff = today - date2000
    const days = Math.round(timeDiff / (1000 * 60 * 60 * 24))
    return days
}
