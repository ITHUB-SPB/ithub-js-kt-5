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
    const milleniumStart = new Date(2000, 0, 1);
    const now = new Date();
    const days = (now - milleniumStart) / (1000 * 60 * 60 * 24);
    return Math.round(days);
}