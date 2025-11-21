/**
 * @param {Date} date - Объект даты
 * @returns {String} День недели
 *
 * @description Функция получает на вход объект даты и выводит
 * в консоль день недели (понедельник, вторник и т.п.). Если этот
 * день - сегодня, формат меняется на "Сегодня понедельник" и т.п.
 *
 * @example
 * logDate(new Date('2022-10-18')) // Вторник
 * logDate(new Date()) // Сегодня вторник
 */
export function logDay(date) {

    const daysOfWeek = [
        'воскресенье',
        'понедельник', 
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота'
    ];
    

    const dayOfWeek = date.getDay();
    const dayName = daysOfWeek[dayOfWeek];
    

    const today = new Date();
    const inputDate = new Date(date);
    

    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);
    

    if (inputDate.getTime() === today.getTime()) {
        console.log(`Сегодня ${dayName}`);
    } else {
        console.log(dayName.charAt(0).toUpperCase() + dayName.slice(1));
    }
    
    return dayName;
}

