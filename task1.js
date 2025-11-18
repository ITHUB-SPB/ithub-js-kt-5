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
    
    const now = Date.now();
    
    
    const hours = Math.floor(now / (1000 * 60 * 60));
    
    return hours;
  }