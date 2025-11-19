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
    const dateold = new Date(2000, 0, 1);
    const datenow = new Date();

    const diff1 = datenow - dateold;
    const diff2 = Math.round(diff1 / (1000 * 60 * 60 * 24));
    return diff2
}