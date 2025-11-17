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
    const newtime = new Date();
    const start_date = new Date(2000, 0, 1, 0, 0)
    const result = newtime - start_date 
    return Math.round(result / 1000 / (3600 * 24))
}
