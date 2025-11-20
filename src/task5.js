/**
 * @param {String} substring - Подстрока для поиска
 * @param {String} text - Исходная строка
 * 
 * @returns {{from: Number, to: Number} | null}
 *
 * @description Функция принимает на вход подстроку для поиска
 * и исходную строку, служит для нахождения второго вхождения 
 * подстроки и возвращает диапазон в виде объекта { from, to } 
 * либо null если оно не найдено.
 */
export function secondOccurenceInterval(substring, text) {
    const firstIndex = text.indexOf(substring);
    if (firstIndex === -1) {
        return null; // Если первое вхождение не найдено, возвращаем null
    }

    const secondIndex = text.indexOf(substring, firstIndex + substring.length);
    if (secondIndex === -1) {
        return null; // Если второе вхождение не найдено, возвращаем null
    }

    return {
        from: secondIndex,
        to: secondIndex + substring.length - 1 // Возвращаем индекс последнего символа
    };
}
