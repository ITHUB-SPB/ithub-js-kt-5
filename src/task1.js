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
    const startDate = new Date(2000, 0, 1, 0, 0, 0, 0);
    const currentDate = new Date();
    
    const diff = currentDate.getTime() - startDate.getTime();
    const days = Math.round(diff / (1000 * 60 * 60 * 24));
    
    return days;
}